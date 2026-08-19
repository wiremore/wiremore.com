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
import css from './clients.module.css';

const Clients = () => {
    const { t } = useTranslation();
    const [sector, setSector] = useState<SectorId | null>(null);

    // Stable identity: SectorFilter reports through an effect, and a fresh function every
    // render would make that effect fire on every render.
    const handleSectorChange = useCallback((next: SectorId | null) => setSector(next), []);

    return (
        <>
            <Meta description={t('meta.descriptions.clients')} title={t('clients.title')} />

            <PageIntro lead={t('clients.lead')} title={t('clients.title')} />

            <Section>
                <Reveal>
                    <SectorFilter onChange={handleSectorChange} />
                </Reveal>

                <Reveal>
                    <ClientWall clients={CLIENTS} highlighted={sector} />
                    <p className={css.note}>{t('clients.note')}</p>
                </Reveal>
            </Section>

            <Section tone="dark">
                <Reveal className={css.nda}>
                    <h2 className={css.ndaTitle}>{t('clients.nda.title')}</h2>
                    <p className={css.ndaText}>{t('clients.nda.text')}</p>
                </Reveal>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Clients;
