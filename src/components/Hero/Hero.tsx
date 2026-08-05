import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import DecodeText from '@/components/DecodeText/DecodeText';
import Cursor from '@/components/Cursor/Cursor';
import css from './Hero.module.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className={css.hero}>
            <div className={css.inner}>
                <p className={css.eyebrow}>{t('home.eyebrow')}</p>

                <DecodeText as="h1" className={css.title} text={t('home.title')} />

                <div className={css.foot}>
                    <p className={css.lead}>
                        {t('home.lead')}
                        <Cursor />
                    </p>
                    <Link className={css.cta} href="/contact">
                        {t('home.cta')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
