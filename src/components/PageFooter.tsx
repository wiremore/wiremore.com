import { Grid, Column, Footer, SocialMediaIcons } from '@manuel-bieh/design-system';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import css from './PageFooter.module.css';

const PageFooter = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    const { pathname } = useRouter();
    return (
        <Footer className={css.wrapper}>
            <Grid centered>
                <Column xs={12} textAlign="center">
                    <p>
                        © 2013-
                        <span>{new Date().getFullYear()}</span> Manuel Bieh –{' '}
                        <Link href="/legal">{t('footer.legal')}</Link> |{' '}
                        <Link href="/contact">{t('footer.contact')}</Link>
                    </p>
                    <p>
                        <span style={{ marginLeft: 24, display: 'inline-block' }}>
                            {['de', 'en'].map((languageCode) =>
                                languageCode === language ? (
                                    <span key={languageCode} style={{ padding: '0 8px' }}>
                                        {languageCode.toUpperCase()}
                                    </span>
                                ) : (
                                    <Link
                                        key={languageCode}
                                        href={pathname}
                                        locale={languageCode}
                                        style={{ padding: '0 8px' }}
                                    >
                                        {languageCode.toUpperCase()}
                                    </Link>
                                )
                            )}
                        </span>
                    </p>
                    <SocialMediaIcons />
                </Column>
            </Grid>
        </Footer>
    );
};

export default PageFooter;
