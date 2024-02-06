import { Grid, Column } from '@manuel-bieh/design-system/dist/index.mjs';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function NotFound404() {
    const { t } = useTranslation();

    return (
        <>
            <Grid>
                <Column>
                    <h1>{t('404.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column>
                    <p>{t('404.text.0')}</p>
                </Column>
            </Grid>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en')),
    },
});
