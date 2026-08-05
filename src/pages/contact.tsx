import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import Reveal from '@/components/Reveal/Reveal';
import Cursor from '@/components/Cursor/Cursor';
import { CONTACT } from '@/config/contact';
import { translatedPage } from '@/utils/translatedPage';
import css from './contact.module.css';

const Contact = () => {
    const { t } = useTranslation();

    const body = t('contact.body', { returnObjects: true }) as string[];

    return (
        <>
            <Meta description={t('meta.descriptions.contact')} title={t('contact.title')} />

            <PageIntro lead={t('contact.lead')} title={t('contact.title')} />

            <Section>
                <div className={css.layout}>
                    <Reveal className={css.body}>
                        <a className={css.email} href={`mailto:${CONTACT.email}`}>
                            {CONTACT.email}
                        </a>
                        {body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </Reveal>

                    <Reveal className={css.details} delay={60}>
                        <div>
                            <p className={css.detailLabel}>{t('contact.addressLabel')}</p>
                            <p className={css.address}>
                                {CONTACT.company}
                                <br />
                                {CONTACT.street}
                                <br />
                                {CONTACT.city}
                                <br />
                                {CONTACT.country}
                                <Cursor />
                            </p>
                        </div>
                        <p className={css.phoneNote}>{t('contact.phoneNote')}</p>
                    </Reveal>
                </div>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Contact;
