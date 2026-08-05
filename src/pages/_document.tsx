import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

const Document = ({ __NEXT_DATA__: nextData }: DocumentProps) => (
    <Html lang={nextData.locale === 'de' ? 'de' : 'en'}>
        <Head>
            <link href="/favicon.png" rel="icon" />
            <meta content="#fafaf8" name="theme-color" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
