import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import Reveal from '@/components/Reveal/Reveal';
import { translatedPage } from '@/utils/translatedPage';
import css from './what-we-do.module.css';

type Offering = {
    index: string;
    name: string;
    lead: string;
    body: string[];
    items: string[];
};

const WhatWeDo = () => {
    const { t } = useTranslation();

    const offerings = t('whatWeDo.offerings', { returnObjects: true }) as Offering[];

    return (
        <>
            <Meta description={t('meta.descriptions.whatWeDo')} title={t('whatWeDo.title')} />

            <PageIntro lead={t('whatWeDo.lead')} title={t('whatWeDo.title')} />

            {offerings.map((offering, index) => (
                <Section
                    index={offering.index}
                    key={offering.name}
                    label={offering.name}
                    tone={index % 2 === 1 ? 'dim' : 'paper'}
                >
                    <div className={css.offering}>
                        <Reveal className={css.aside}>
                            <h2 className={css.name}>{offering.name}</h2>
                            <p className={css.tagline}>{offering.lead}</p>
                        </Reveal>

                        <Reveal className={css.body} delay={60}>
                            {offering.body.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}

                            <div>
                                <p className={css.itemsLabel}>{t('whatWeDo.itemsLabel')}</p>
                                <ul className={css.items}>
                                    {offering.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </Section>
            ))}

            <Section tone="dark">
                <Reveal className={css.closing}>
                    <h2 className={css.closingTitle}>{t('whatWeDo.closing.title')}</h2>
                    <p className={css.closingText}>{t('whatWeDo.closing.text')}</p>
                    <Link className={css.closingLink} href="/contact">
                        {t('navigation.contact')}
                    </Link>
                </Reveal>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default WhatWeDo;
