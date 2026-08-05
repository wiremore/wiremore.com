/**
 * `default` is a sentinel locale, not a language. Next.js needs a defaultLocale that owns
 * the un-prefixed `/` route; middleware.ts intercepts it, resolves a real language from
 * Accept-Language or the NEXT_LOCALE cookie, and redirects. Without the sentinel, Next
 * would serve English at both `/` and `/en` and we could never detect anything.
 *
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    i18n: {
        locales: ['default', 'en', 'de'],
        defaultLocale: 'default',
        localeDetection: false,
    },
    fallbackLng: 'en',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    returnObjects: true,
    resources: {
        de: {
            common: require('./public/locales/de/common.json'),
        },
        en: {
            common: require('./public/locales/en/common.json'),
        },
    },
};
