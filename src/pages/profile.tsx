import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
// import Link from 'next/link';
import { Grid, Column, DataTable } from '@manuel-bieh/design-system';
import css from './profile.module.css';
import Portrait from '../assets/img/manuel-portrait-01.jpg';

type WorkItem = {
    company: string;
    endDate: string;
    location: string;
    position: string;
    startDate: string;
};

type EducationItem = {
    endDate: string;
    institution: string;
    startDate: string;
    studyType: string;
};

const workDataToDataTable = (items: WorkItem[], t: any) =>
    items.reduce((rows: any[], item) => {
        const { company, location, position, startDate, endDate } = item;
        const start = endDate ? startDate.substring(0, 7) : t('time.since');
        const end = endDate ? endDate.substring(0, 7) : startDate.substring(0, 7);
        const sep = endDate ? '–' : '';
        rows.push([
            <>
                {start}
                {sep}
                <br />
                {end}
            </>,
            <>
                <strong>{position}</strong>
                <br />
                {company}, {location}
            </>,
        ]);
        return rows;
    }, []);

const educationDataToDataTable = (items: EducationItem[], t: any) =>
    items.reduce((rows: any[], item) => {
        const { institution, studyType, startDate, endDate } = item;
        const start = endDate ? startDate.substring(0, 7) : t('time.since');
        const end = endDate ? endDate.substring(0, 7) : startDate.substring(0, 7);
        const sep = endDate ? '–' : '';
        rows.push([
            <>
                {start}
                {sep}
                <br />
                {end}
            </>,
            <>
                <strong>{studyType}</strong>
                <br />
                {institution}
            </>,
        ]);
        return rows;
    }, []);

export default function Profile() {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{t('meta.titleTemplate', { title: t('profile.title') })}</title>
            </Head>
            <Grid>
                <Column>
                    <h1>{t('profile.title')}</h1>
                </Column>
            </Grid>
            <Grid>
                <Column xs={12} lg={8}>
                    {((t('profile.intro') ?? []) as unknown as string[])?.map((text: string) => (
                        <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                </Column>
                <Column xs={12} lg={4}>
                    <Image
                        src={Portrait}
                        alt="Photo Manuel Bieh"
                        style={{ width: 530, aspectRatio: 530 / 700, height: 'auto' }}
                    />
                </Column>
            </Grid>
            <Grid>
                <Column>
                    <h2>{t('profile.sections.work.headline')}</h2>
                    <DataTable
                        data={workDataToDataTable(t('cv:work') as unknown as WorkItem[], t)}
                        columnClassNames={[css.cell01]}
                    />

                    <h2>{t('profile.sections.education.headline')}</h2>
                    <DataTable
                        data={educationDataToDataTable(t('cv:education') as unknown as EducationItem[], t)}
                        columnClassNames={[css.cell01]}
                    />

                    <h2>{t('profile.sections.qualifications.headline')}</h2>
                    <ul>
                        {(t('cv:qualifications') as unknown as string[]).map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h2>{t('profile.sections.skills.headline')}</h2>

                    <h3>{t('profile.sections.skills.proficient')}</h3>
                    <p>
                        <strong>{t('profile.sections.skills.technical')}:</strong>{' '}
                        {(t('cv:skills.technical.proficient') as unknown as string[]).join(', ')}
                    </p>
                    <p>
                        <strong>{t('profile.sections.skills.economical')}:</strong>{' '}
                        {(t('cv:skills.economic.proficient') as unknown as string[]).join(', ')}
                    </p>

                    <h3>{t('profile.sections.skills.intermediate')}</h3>
                    <p>
                        <strong>{t('profile.sections.skills.technical')}:</strong>{' '}
                        {(t('cv:skills.technical.intermediate') as unknown as string[]).join(', ')}
                    </p>
                    <p>
                        <strong>{t('profile.sections.skills.economical')}:</strong>{' '}
                        {(t('cv:skills.economic.intermediate') as unknown as string[]).join(', ')}
                    </p>

                    <h3>{t('profile.sections.skills.basic')}</h3>
                    <p>
                        <strong>{t('profile.sections.skills.technical')}:</strong>{' '}
                        {(t('cv:skills.technical.basic') as unknown as string[]).join(', ')}
                    </p>
                    <p>
                        <strong>{t('profile.sections.skills.economical')}:</strong>{' '}
                        {(t('cv:skills.economic.basic') as unknown as string[]).join(', ')}
                    </p>
                </Column>
            </Grid>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common', 'cv'])),
    },
});
