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

    const path = asPath === '/' ? '' : asPath;
    const canonical = `${SITE_URL}/${locale ?? 'en'}${path}`;
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
            <meta content={locale === 'de' ? 'de_DE' : 'en_GB'} property="og:locale" />
            <meta content="website" property="og:type" />
            <meta content="summary" name="twitter:card" />
        </Head>
    );
};

export default Meta;
