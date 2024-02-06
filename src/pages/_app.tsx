// import '@/styles/globals.css';
import '@manuel-bieh/design-system/dist/index.css';
import '@/styles/Layout.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Grid, Column } from '@manuel-bieh/design-system';
import css from '@/styles/Layout.module.css';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import '@/styles/Overrides.css';
import '../../public/locales/de/common.json';
import '../../public/locales/en/common.json';

const App = ({ Component, pageProps }: AppProps) => (
    <div className={css.pageWrapper}>
        <PageHeader />
        <Grid className={css.pageContent} centered>
            <Column>
                <main>
                    <Component {...pageProps} />
                </main>
            </Column>
        </Grid>
        <PageFooter />
    </div>
);

export default appWithTranslation(App);
