import { Trans, useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import Reveal from '@/components/Reveal/Reveal';
import { translatedPage } from '@/utils/translatedPage';
import css from './studio.module.css';

type NamedItem = {
    name: string;
    text: string;
};

const Studio = () => {
    const { t } = useTranslation();

    const companyText = t('studio.company.text', { returnObjects: true }) as string[];
    const networkText = t('studio.network.text', { returnObjects: true }) as string[];
    const principalText = t('studio.principal.text', { returnObjects: true }) as string[];
    const products = t('studio.products.items', { returnObjects: true }) as NamedItem[];

    return (
        <>
            <Meta description={t('meta.descriptions.studio')} title={t('studio.title')} />

            <PageIntro lead={t('studio.lead')} title={t('studio.title')} />

            <Section index={t('studio.company.index')} label={t('studio.company.label')}>
                <div className={css.block}>
                    <Reveal>
                        <h2 className={css.blockTitle}>{t('studio.company.title')}</h2>
                    </Reveal>
                    <Reveal className={css.body} delay={60}>
                        {companyText.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </Reveal>
                </div>
            </Section>

            <Section index={t('studio.principal.index')} label={t('studio.principal.label')} tone="dim">
                <div className={css.block}>
                    <Reveal>
                        <h2 className={css.blockTitle}>{t('studio.principal.title')}</h2>
                    </Reveal>
                    <Reveal className={css.body} delay={60}>
                        {principalText.map((paragraph, index) => (
                            <p key={paragraph}>
                                <Trans
                                    components={{
                                        book: <cite />,
                                        site: (
                                            // eslint-disable-next-line jsx-a11y/anchor-has-content
                                            <a href="https://www.manuelbieh.de" rel="noreferrer" target="_blank" />
                                        ),
                                    }}
                                    i18nKey={`studio.principal.text.${index}`}
                                />
                            </p>
                        ))}
                    </Reveal>
                </div>
            </Section>

            <Section index={t('studio.network.index')} label={t('studio.network.label')}>
                <div className={css.block}>
                    <Reveal>
                        <h2 className={css.blockTitle}>{t('studio.network.title')}</h2>
                    </Reveal>
                    <Reveal className={css.body} delay={60}>
                        {networkText.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </Reveal>
                </div>
            </Section>

            <Section index={t('studio.products.index')} label={t('studio.products.label')} tone="dim">
                <div className={css.block}>
                    <Reveal>
                        <h2 className={css.blockTitle}>{t('studio.products.title')}</h2>
                    </Reveal>
                    <Reveal className={css.body} delay={60}>
                        <p>{t('studio.products.lead')}</p>
                        <div className={css.products}>
                            {products.map((product) => (
                                <div className={css.product} key={product.name}>
                                    <h3 className={css.productName}>{product.name}</h3>
                                    <p className={css.productText}>{product.text}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Studio;
