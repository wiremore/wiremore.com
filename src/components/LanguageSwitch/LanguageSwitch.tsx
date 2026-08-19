import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import css from './LanguageSwitch.module.css';

const LOCALES = ['en', 'de'] as const;

/**
 * Explicit override for the language middleware picked. The choice lives in the URL and
 * nothing is stored, so it persists while browsing and in a shared or bookmarked link,
 * but a later visit to the bare domain follows the browser again. That is the deliberate
 * price of the site setting no cookies.
 */
const LanguageSwitch = () => {
    const { asPath, locale } = useRouter();

    return (
        <div className={css.switch}>
            {LOCALES.map((code, index) => (
                <Fragment key={code}>
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
                </Fragment>
            ))}
        </div>
    );
};

export default LanguageSwitch;
