import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
// import Link from 'next/link';
import { Grid, Column } from '@manuel-bieh/design-system';

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('meta.titleTemplate', { title: t('contact.title') })}</title>
            </Head>

            <Grid>
                <Column textAlign="center">
                    <h1>{t('contact.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column xs={12}>
                    {(t('contact.text') as unknown as string[]).map((text: string) => (
                        <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
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
