import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import css from './LanguageSwitch.module.css';

const LOCALES = ['en', 'de'] as const;

/**
 * Explicit override for the language middleware picked. Visiting a locale-prefixed URL
 * updates the NEXT_LOCALE cookie in middleware, so the choice made here sticks without
 * any client-side cookie handling.
 */
const LanguageSwitch = () => {
    const { asPath, locale } = useRouter();

    return (
        <div className={css.switch}>
            {LOCALES.map((code, index) => (
                <span key={code}>
                    {index > 0 && (
                        <span aria-hidden className={css.divider}>
                            /
                        </span>
                    )}
                    <Link
                        aria-current={locale === code ? 'true' : undefined}
                        className={cx(css.option, locale === code && css.active)}
                        href={asPath}
                        hrefLang={code}
                        locale={code}
                    >
                        {code.toUpperCase()}
                    </Link>
                </span>
            ))}
        </div>
    );
};

export default LanguageSwitch;
