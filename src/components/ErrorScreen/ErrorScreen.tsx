import Link from 'next/link';
import cx from 'classnames';
import css from './ErrorScreen.module.css';

type ErrorScreenProps = {
    code: string;
    title: string;
    text: string;
    back: string;
    /** Adds the CRT vertical-hold treatment. Reserved for 404. */
    lost?: boolean;
};

const ErrorScreen = ({ code, title, text, back, lost = false }: ErrorScreenProps) => (
    <section className={cx(css.screen, lost && css.lost)}>
        <div className={css.inner}>
            <p className={css.code}>{code}</p>
            <h1 className={css.title}>{title}</h1>
            <p className={css.text}>{text}</p>
            <Link className={css.back} href="/">
                {back}
            </Link>
        </div>
    </section>
);

export default ErrorScreen;
