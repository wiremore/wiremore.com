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
                        {/* <strong>Wiremore</strong> entwickelt mit Begeisterung nutzerfreundliche Frontends und
                        funktionierende Online-Anwendungen für Kunden, die Wert auf Qualität legen. Alles weitere gibt
                        es <Link href="https://www.manuelbieh.de">hier</Link>. */}
                        <Trans i18nKey="home.text.0">
                            <strong>Wiremore</strong> entwickelt mit Begeisterung nutzerfreundliche Frontends und
                            funktionierende Online-Anwendungen für Kunden, die Wert auf Qualität legen. Alles weitere
                            gibt es <Link href={`https://www.manuelbieh.de/${language}`}>hier</Link>
                        </Trans>
                        {/* Treten Sie gern mit
                        uns in <Link href="/contact">Kontakt</Link> oder informieren Sie sich über unser Angebot auf der
ührers <Link href="https://www.manuelbieh.de">Manuel Bieh</Link>. */}
                    </p>
                    {/*
                    <p dangerouslySetInnerHTML={{ __html: t('home.text.0') }} />
                     <p>
                        <Trans i18nKey="home.text.1">
                            0<Link href="/clients">1</Link>2<Link href="/technologies">3</Link>4<>5</>.
                        </Trans>
                    </p>
                    <p>{t('home.text.2')}</p>
                    <ul>
                        {(t('home.services') as unknown as string[]).map((item) => (
                            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                    <p>{t('home.text.3')}</p>
                </Column>
                <Column xs={12} lg={4}>
                    <Image
                        src={Portrait}
                        alt="Photo Manuel Bieh"
                        style={{ width: 530, aspectRatio: 530 / 700, height: 'auto' }}
                    /> */}
                </Column>
            </Grid>
            <Grid>
                <Column textAlign="center">
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
