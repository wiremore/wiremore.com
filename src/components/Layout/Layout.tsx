import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import Header from './Header';
import Footer from './Footer';
import css from './Layout.module.css';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const { t } = useTranslation();

    return (
        <div className={css.page}>
            <a className="skipLink" href="#main">
                {t('navigation.skip')}
            </a>
            <Header />
            <main className={css.main} id="main">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
