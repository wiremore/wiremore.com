import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Reveal from '@/components/Reveal/Reveal';
import ClientWall from '@/components/ClientWall/ClientWall';
import { FEATURED_CLIENTS } from '@/config/clients';
import { CONTACT } from '@/config/contact';
import { translatedPage } from '@/utils/translatedPage';
import css from './index.module.css';

type NamedItem = {
    name: string;
    text: string;
};

const Home = () => {
    const { t } = useTranslation();

    const services = t('home.services.items', { returnObjects: true }) as NamedItem[];
    const principles = t('home.method.items', { returnObjects: true }) as NamedItem[];

    return (
        <>
            <Meta description={t('meta.descriptions.home')} />

            <Hero />

            <Section
                index={t('home.services.index')}
                label={t('home.services.label')}
                title={t('home.services.title')}
            >
                <div className={css.services}>
                    {services.map((service, index) => (
                        <Reveal className={css.service} delay={index * 60} key={service.name}>
                            <h3 className={css.serviceName}>{service.name}</h3>
                            <p className={css.serviceText}>{service.text}</p>
                        </Reveal>
                    ))}
                </div>
                <Reveal>
                    <Link className={css.more} href="/what-we-do">
                        {t('home.services.more')}
                    </Link>
                </Reveal>
            </Section>

            <Section
                index={t('home.clients.index')}
                label={t('home.clients.label')}
                title={t('home.clients.title')}
                tone="dim"
            >
                <Reveal>
                    <ClientWall clients={FEATURED_CLIENTS} />
                    <Link className={css.more} href="/clients">
                        {t('home.clients.more')}
                    </Link>
                </Reveal>
            </Section>

            <Section index={t('home.method.index')} label={t('home.method.label')} title={t('home.method.title')}>
                <div className={css.principles}>
                    {principles.map((principle, index) => (
                        <Reveal className={css.principle} delay={index * 60} key={principle.name}>
                            <h3 className={css.principleName}>{principle.name}</h3>
                            <p className={css.principleText}>{principle.text}</p>
                        </Reveal>
                    ))}
                </div>
                <Reveal>
                    <Link className={css.more} href="/how-we-work">
                        {t('home.method.more')}
                    </Link>
                </Reveal>
            </Section>

            <Section
                index={t('home.contact.index')}
                label={t('home.contact.label')}
                title={t('home.contact.title')}
                tone="dark"
            >
                <div className={css.contactBand}>
                    <p className={css.contactText}>{t('home.contact.text')}</p>
                    <a className={css.contactEmail} href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                    </a>
                </div>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Home;
