import { ReactNode } from 'react';
import DecodeText from '@/components/DecodeText/DecodeText';
import css from './PageIntro.module.css';

type PageIntroProps = {
    title: string;
    lead?: ReactNode;
};

const PageIntro = ({ title, lead }: PageIntroProps) => (
    <div className={css.intro}>
        <div className={css.inner}>
            <DecodeText as="h1" className={css.title} text={title} />
            {lead && <div className={css.lead}>{lead}</div>}
        </div>
    </div>
);

export default PageIntro;
