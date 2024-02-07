import { Grid, Column, Footer, SocialMediaIcons } from '@manuel-bieh/design-system';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import css from './PageFooter.module.css';

const languages = ['de', 'en'];

const PageFooter = () => {
    const {
        // t,
        i18n: { language },
    } = useTranslation();
    const { pathname } = useRouter();
    return (
        <Footer className={css.wrapper}>
            <Grid centered>
                <Column xs={12} textAlign="center">
                    <p>
                        <strong style={{ fontSize: '80%' }}>
                            <span style={{ marginLeft: 24, display: 'inline-block' }}>
                                {languages.map((languageCode, num) =>
                                    languageCode === language ? (
                                        <React.Fragment key={languageCode}>
                                            <span key={languageCode} style={{ padding: '0 4px' }}>
                                                {languageCode.toUpperCase()}
                                            </span>
                                            {num < languages.length - 1 && ' | '}
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment key={languageCode}>
                                            <Link
                                                key={languageCode}
                                                href={pathname}
                                                locale={languageCode}
                                                style={{ padding: '0 4px' }}
                                            >
                                                {languageCode.toUpperCase()}
                                            </Link>
                                            {num < languages.length - 1 && ' | '}
                                        </React.Fragment>
                                    )
                                )}
                            </span>
                        </strong>
                    </p>
                    <p>
                        <strong>wiremore&nbsp;UG (haftungsbeschränkt)</strong> – Zelterstr.&nbsp;10 – 10439&nbsp;Berlin
                        – manuel.bieh@wiremore.com
                        <br />
                        <strong>Geschäftsführer:</strong> Manuel&nbsp;Bieh – <strong>Registergericht:</strong>{' '}
                        Handelsregister Amtsgericht Dortmund – HRB 25711 – <strong>Ust-Id:</strong> DE289451798
                    </p>
                    <p>
                        © 2013-
                        <span>{new Date().getFullYear()}</span> <strong>Manuel Bieh</strong>
                        {/* 
                        –{' '}
                        <Link href="/legal">{t('footer.legal')}</Link> |{' '}
                        <Link href="/contact">{t('footer.contact')}</Link> */}
                    </p>
                    <SocialMediaIcons />
                </Column>
            </Grid>
        </Footer>
    );
};

export default PageFooter;
