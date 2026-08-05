import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED = ['en', 'de'] as const;
const DEFAULT_LOCALE = 'en';

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

/**
 * Sends un-prefixed URLs to a language.
 *
 * Deliberately stateless: the choice is read from the Accept-Language header the browser
 * sends anyway and is never stored. This site sets no cookies at all, which is what makes
 * its privacy position simple — nothing to disclose and nothing to ask consent for.
 *
 * The cost is that an explicit switch to the other language does not survive a later visit
 * to the bare domain: locale lives in the URL, so it persists while browsing and in any
 * shared or bookmarked link, but a fresh visit to `/` follows the browser again.
 */
export const middleware = (req: NextRequest) => {
    const { pathname, search, locale } = req.nextUrl;

    if (pathname.startsWith('/_next') || pathname.startsWith('/api/') || PUBLIC_FILE.test(pathname)) {
        return undefined;
    }

    // A real locale in the URL is already an explicit choice — leave it alone.
    if (locale !== 'default') {
        return undefined;
    }

    const resolved = parseAcceptLanguage(req.headers.get('accept-language')) ?? DEFAULT_LOCALE;

    // pathname is '/' at the root; keeping it would redirect to '/de/' and give every
    // page two spellings for search engines to reconcile.
    const target = pathname === '/' ? '' : pathname;

    return NextResponse.redirect(new URL(`/${resolved}${target}${search}`, req.url));
};

export const config = {
    // '/' is listed separately on purpose: the negative-lookahead pattern below never
    // matches the bare root, so without this entry the one route that most needs
    // language detection is the one route that never reaches this middleware.
    matcher: ['/', '/((?!_next|api|.*\\..*).*)'],
};
