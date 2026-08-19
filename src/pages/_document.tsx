import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

const Document = ({ __NEXT_DATA__: nextData }: DocumentProps) => (
    <Html lang={nextData.locale === 'de' ? 'de' : 'en'}>
        <Head>
            <link href="/favicon.ico" rel="icon" sizes="32x32" />
            <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
            <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
            <link href="/icon-192.png" rel="icon" sizes="192x192" type="image/png" />
            <link href="/icon-512.png" rel="icon" sizes="512x512" type="image/png" />
            <meta content="#fafaf8" name="theme-color" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
