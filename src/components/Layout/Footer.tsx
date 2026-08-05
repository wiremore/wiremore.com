import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import Logo from '@/components/Logo/Logo';
import { LEGAL_ITEMS, NAV_ITEMS } from '@/config/navigation';
import { CONTACT } from '@/config/contact';
import css from './Footer.module.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={css.footer}>
            <div className={css.inner}>
                <div className={css.brandColumn}>
                    <Logo className={css.mark} title={null} />
                    <p className={css.tagline}>{t('footer.tagline')}</p>
                </div>

                <div className={css.column}>
                    <h2 className={css.columnLabel}>{t('footer.contactLabel')}</h2>
                    <p>
                        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </p>
                    <p className={css.address}>
                        <Trans i18nKey="footer.address">
                            wiremore GmbH
                            <br />
                            Zelterstr. 10
                            <br />
                            10439 Berlin
                        </Trans>
                    </p>
                </div>

                <div className={css.column}>
                    <h2 className={css.columnLabel}>{t('footer.siteLabel')}</h2>
                    <ul className={css.list}>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>{t(item.labelKey)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={css.column}>
                    <h2 className={css.columnLabel}>{t('footer.legalLabel')}</h2>
                    <ul className={css.list}>
                        {LEGAL_ITEMS.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>{t(item.labelKey)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={css.baseline}>
                <span>{t('footer.copyright', { year: CONTACT.copyrightYear })}</span>
                <span className={css.built}>{t('footer.built')}</span>
            </div>
        </footer>
    );
};

export default Footer;
