import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const SITE_URL = 'https://www.wiremore.com';
const LOCALES = ['en', 'de'] as const;

type MetaProps = {
    /** Page title without the site suffix. Omit on the home page. */
    title?: string;
    description: string;
};

const Meta = ({ title, description }: MetaProps) => {
    const { asPath, locale } = useRouter();
    const { t } = useTranslation();

    // asPath carries the query string and hash. Leaving them in would mint a distinct
    // canonical for every campaign link — /clients?utm_source=… would declare itself the
    // canonical version of /clients, which is the opposite of what a canonical is for.
    const [pathname] = asPath.split(/[?#]/);
    const path = pathname === '/' ? '' : pathname;

    // `default` is the sentinel locale that owns the un-prefixed route, and Next prerenders
    // every page under it. `?? 'en'` does not catch it — it is a string, not undefined — so
    // without this those pages would each declare a canonical of /default/… , a URL that is
    // not meant to exist and that middleware redirects away from.
    const language = !locale || locale === 'default' ? 'en' : locale;
    const canonical = `${SITE_URL}/${language}${path}`;
    const fullTitle = title ? `${title} — ${t('meta.siteName')}` : t('meta.defaultTitle');

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta content={description} name="description" />
            <link href={canonical} rel="canonical" />

            {LOCALES.map((code) => (
                <link href={`${SITE_URL}/${code}${path}`} hrefLang={code} key={code} rel="alternate" />
            ))}
            <link href={`${SITE_URL}/en${path}`} hrefLang="x-default" rel="alternate" />

            <meta content={fullTitle} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content={canonical} property="og:url" />
            <meta content={t('meta.siteName')} property="og:site_name" />
            <meta content={language === 'de' ? 'de_DE' : 'en_GB'} property="og:locale" />
            <meta content="website" property="og:type" />
            <meta content="summary" name="twitter:card" />
        </Head>
    );
};

export default Meta;
