import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * Standard getStaticProps for every page. The `default` sentinel locale never reaches a
 * page — middleware redirects it — but it can still be requested during prerender, so it
 * falls back to English rather than throwing on a missing bundle.
 */
export const translatedPage: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale && locale !== 'default' ? locale : 'en', ['common'])),
    },
});
