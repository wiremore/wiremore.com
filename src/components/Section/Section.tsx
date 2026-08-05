import { ReactNode } from 'react';
import cx from 'classnames';
import Reveal from '@/components/Reveal/Reveal';
import css from './Section.module.css';

type SectionProps = {
    children: ReactNode;
    /** Two-digit index rendered before the label, e.g. `01 / HOW WE WORK`. */
    index?: string;
    label?: string;
    title?: ReactNode;
    lead?: ReactNode;
    tone?: 'paper' | 'dim' | 'dark';
    className?: string;
};

const Section = ({ children, index, label, title, lead, tone = 'paper', className }: SectionProps) => (
    <section className={cx(css.section, tone === 'dim' && css.dim, tone === 'dark' && css.dark, className)}>
        <div className={css.inner}>
            {(label || title || lead) && (
                <Reveal className={css.head}>
                    {label && (
                        <p className={css.label}>
                            {index && <span className={css.index}>{index}</span>}
                            {label}
                        </p>
                    )}
                    {title && <h2 className={css.title}>{title}</h2>}
                    {lead && <div className={css.lead}>{lead}</div>}
                </Reveal>
            )}
            {children}
        </div>
    </section>
);

export default Section;
