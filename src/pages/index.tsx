import type { GetStaticProps } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Grid, Column, ClientLogos } from '@manuel-bieh/design-system';
// import Portrait from '../assets/img/manuel-portrait-01.jpg';
import css from './index.module.css';

export default function Home() {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('meta.titleTemplate', { title: t('home.title') })}</title>
            </Head>
            <Grid>
                <Column textAlign="center">
                    <h1>{t('home.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column xs={12}>
                    <p>
                        <Trans i18nKey="home.text.0">
                            <strong>Wiremore</strong> entwickelt mit Begeisterung nutzerfreundliche User Interfaces und
                            leistungsstarke Online-Anwendungen für Kunden, die besonderen Wert auf Qualität legen.
                            Weitere informationen <Link href={`https://www.manuelbieh.de/${language}`}>hier</Link>.
                        </Trans>
                    </p>
                </Column>
            </Grid>
            <Grid>
                <Column textAlign="center">
                    <br />
                    <h1>{t('home.clients.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column className={css.clients}>
                    <ClientLogos />
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
