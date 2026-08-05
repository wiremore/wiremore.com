import { useCallback, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import Reveal from '@/components/Reveal/Reveal';
import ClientWall from '@/components/ClientWall/ClientWall';
import SectorFilter from '@/components/SectorFilter/SectorFilter';
import { CLIENTS, SectorId } from '@/config/clients';
import { translatedPage } from '@/utils/translatedPage';
import css from './work.module.css';

const Work = () => {
    const { t } = useTranslation();
    const [sector, setSector] = useState<SectorId | null>(null);

    // Stable identity: SectorFilter reports through an effect, and a fresh function every
    // render would make that effect fire on every render.
    const handleSectorChange = useCallback((next: SectorId | null) => setSector(next), []);

    return (
        <>
            <Meta description={t('meta.descriptions.work')} title={t('work.title')} />

            <PageIntro lead={t('work.lead')} title={t('work.title')} />

            <Section>
                <Reveal>
                    <SectorFilter onChange={handleSectorChange} />
                </Reveal>

                <Reveal>
                    <ClientWall clients={CLIENTS} highlighted={sector} />
                    <p className={css.note}>{t('work.note')}</p>
                </Reveal>
            </Section>

            <Section tone="dark">
                <Reveal className={css.nda}>
                    <h2 className={css.ndaTitle}>{t('work.nda.title')}</h2>
                    <p className={css.ndaText}>{t('work.nda.text')}</p>
                </Reveal>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Work;
