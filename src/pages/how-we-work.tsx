import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import Reveal from '@/components/Reveal/Reveal';
import { translatedPage } from '@/utils/translatedPage';
import css from './how-we-work.module.css';

type Principle = {
    index: string;
    name: string;
    text: string[];
};

const HowWeWork = () => {
    const { t } = useTranslation();

    const principles = t('howWeWork.principles', { returnObjects: true }) as Principle[];

    return (
        <>
            <Meta description={t('meta.descriptions.howWeWork')} title={t('howWeWork.title')} />

            <PageIntro lead={t('howWeWork.lead')} title={t('howWeWork.title')} />

            <Section>
                <div className={css.principles}>
                    {principles.map((principle) => (
                        <Reveal className={css.principle} key={principle.index}>
                            <div className={css.head}>
                                <span className={css.index}>{principle.index}</span>
                                <h2 className={css.name}>{principle.name}</h2>
                            </div>
                            <div className={css.body}>
                                {principle.text.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default HowWeWork;
