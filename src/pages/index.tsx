import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Grid, Column } from '@manuel-bieh/design-system';
import Portrait from '../assets/img/manuel-portrait-01.jpg';

export default function Home() {
    const { t } = useTranslation();
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
                <Column xs={12} lg={8}>
                    <p dangerouslySetInnerHTML={{ __html: t('home.text.0') }} />
                    <p>
                        <Trans i18nKey="home.text.1">
                            0<Link href="/clients">1</Link>2<Link href="/technologies">3</Link>4
                            <Link href="/publications">5</Link>.
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
                    />
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
