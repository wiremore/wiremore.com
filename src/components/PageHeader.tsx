'use client';

import { Grid, Column, Header } from '@manuel-bieh/design-system';
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// import AnimatedLogo from '../../public/assets/img/animated-logo-css.svg';
import AnimatedLogo from './AnimatedLogo';
import css from './PageHeader.module.css';

const routes: { [route: string]: string } = {
    home: '/',
    // profile: '/profile',
    clients: '/clients',
    technologies: '/technologies',
    // publications: '/publications',
};

const PageHeader = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation();

    const { pathname } = useRouter();

    return (
        <Header className={css.wrapper}>
            <Grid centered>
                <Column xs={12}>
                    <Link href="/" className={css.logoWrapper}>
                        <AnimatedLogo />
                    </Link>
                    <hgroup>
                        <h2>
                            {t('header.subhead')}
                            <br />
                            {t('header.subhead2')}
                        </h2>
                    </hgroup>
                </Column>
            </Grid>
            <Grid centered style={{ marginBottom: -32 }}>
                <Column xs={12}>
                    {/* <nav>
                        <ul style={{ float: 'right', listStyle: 'none' }}>
                            <li style={{ float: 'left' }}>
                                {['de', 'en'].map((languageCode) =>
                                    languageCode === language ? (
                                        <span key={languageCode}>{languageCode.toUpperCase()}</span>
                                    ) : (
                                        <Link key={languageCode} href={pathname} locale={languageCode}>
                                            {languageCode.toUpperCase()}
                                        </Link>
                                    )
                                )}
                            </li>
                        </ul>
                    </nav> */}
                    <nav>
                        <ul>
                            {Object.keys(routes).map((route: string) => (
                                <li key={route}>
                                    <Link href={routes[route]} className={routes[route] === pathname ? css.active : ''}>
                                        {t(`navigation.${route}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Column>
            </Grid>
        </Header>
    );
};

export default PageHeader;
