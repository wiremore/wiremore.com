// @flow
// import { Grid, Column } from '@manuel-bieh/ui/dist/es';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Link, withIntl } from '../../i18n';
import { Column, Grid } from '@manuel-bieh/design-system';
import css from './publications.module.css';

type Props = {
    description: React.ReactNode;
    image: string;
    meta?: string;
    title: string;
    url?: string;
};

export const Publication = ({ image, title, description, meta, url }: Props) => (
    <Grid className={css.publication}>
        <Column xs={12} md={4} lg={3} xl={2}>
            <Image src={image} alt={`image: ${title}`} />
            {/* <img src="/react-book-de.png" alt={`image: ${title}`} /> */}
        </Column>
        <Column xs={12} md={8} lg={9} xl={10}>
            <h3>{title}</h3>
            <section>{description}</section>
            {meta && (
                <p>
                    <strong>{meta}</strong>
                </p>
            )}
            {url && (
                <p>
                    <Link href={url}>Weiterlesen</Link>
                </p>
            )}
        </Column>
    </Grid>
);
