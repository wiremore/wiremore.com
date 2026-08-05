import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';

/* Archivo carries a width axis, which is what lets the hero headline go poster-wide
   without a second display face. IBM Plex Mono handles every label and caption — and its
   lineage is a quieter nod to the era than a novelty font would be. */
const archivo = Archivo({
    axes: ['wdth'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-archivo',
});

const plexMono = IBM_Plex_Mono({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-plex-mono',
    weight: ['400', '500'],
});

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <div className={`${archivo.variable} ${plexMono.variable} appRoot`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    </>
);

export default appWithTranslation(App);
