import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import cx from 'classnames';
import Logo from '@/components/Logo/Logo';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';
import { NAV_ITEMS } from '@/config/navigation';
import css from './Header.module.css';

const Header = () => {
    const { t } = useTranslation();
    const { pathname } = useRouter();

    return (
        <header className={css.header}>
            <div className={css.inner}>
                <Link aria-label="wiremore" className={css.brand} href="/">
                    <Logo animated title={null} />
                </Link>

                <nav aria-label={t('navigation.label')} className={css.nav}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            aria-current={pathname === item.href ? 'page' : undefined}
                            className={cx(css.navLink, pathname === item.href && css.navLinkActive)}
                            href={item.href}
                            key={item.href}
                        >
                            {t(item.labelKey)}
                        </Link>
                    ))}
                </nav>

                <LanguageSwitch />
            </div>
        </header>
    );
};

export default Header;
