import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED = ['en', 'de'] as const;
const DEFAULT_LOCALE = 'en';
const COOKIE = 'NEXT_LOCALE';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const PUBLIC_FILE = /\.(.*)$/;

type Locale = (typeof SUPPORTED)[number];

const isSupported = (value: string): value is Locale => SUPPORTED.includes(value as Locale);

/**
 * Picks the best supported language from an Accept-Language header.
 *
 * Entries are ranked by q-value (absent q means 1.0) and matched on the primary subtag,
 * so `de-AT` and `de-CH` both resolve to German. Returns null when nothing matches, which
 * leaves the caller free to fall back to English.
 */
const parseAcceptLanguage = (header: string | null): Locale | null => {
    if (!header) {
        return null;
    }

    const ranked = header
        .split(',')
        .map((part) => {
            const [tag, ...params] = part.trim().split(';');
            const q = params.find((param) => param.trim().startsWith('q='));
            const quality = q ? Number.parseFloat(q.trim().slice(2)) : 1;

            return {
                language: tag.trim().toLowerCase().split('-')[0],
                quality: Number.isFinite(quality) ? quality : 0,
            };
        })
        .filter((entry) => entry.quality > 0)
        .sort((a, b) => b.quality - a.quality);

    const match = ranked.find((entry) => isSupported(entry.language));

    return match && isSupported(match.language) ? match.language : null;
};

export const middleware = (req: NextRequest) => {
    const { pathname, search, locale } = req.nextUrl;

    if (pathname.startsWith('/_next') || pathname.startsWith('/api/') || PUBLIC_FILE.test(pathname)) {
        return undefined;
    }

    // A real locale in the URL is an explicit choice — from the switcher or a shared link.
    // Remember it so the next un-prefixed visit lands in the same language.
    if (locale !== 'default') {
        const response = NextResponse.next();

        if (req.cookies.get(COOKIE)?.value !== locale) {
            response.cookies.set(COOKIE, locale, { maxAge: COOKIE_MAX_AGE, sameSite: 'lax', path: '/' });
        }

        return response;
    }

    const remembered = req.cookies.get(COOKIE)?.value;
    const resolved =
        remembered && isSupported(remembered)
            ? remembered
            : (parseAcceptLanguage(req.headers.get('accept-language')) ?? DEFAULT_LOCALE);

    // pathname is '/' at the root; keeping it would redirect to '/de/' and give every
    // page two spellings for search engines to reconcile.
    const target = pathname === '/' ? '' : pathname;
    const response = NextResponse.redirect(new URL(`/${resolved}${target}${search}`, req.url));
    response.cookies.set(COOKIE, resolved, { maxAge: COOKIE_MAX_AGE, sameSite: 'lax', path: '/' });

    return response;
};

export const config = {
    // '/' is listed separately on purpose: the negative-lookahead pattern below never
    // matches the bare root, so without this entry the one route that most needs
    // language detection is the one route that never reaches this middleware.
    matcher: ['/', '/((?!_next|api|.*\\..*).*)'],
};
