import i18nConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: i18nConfig.i18n,
    reactStrictMode: true,
    poweredByHeader: false,

    // /work was the public URL until the page became /clients. Keeping the redirect costs
    // nothing and keeps old links, search results and the odd printed deck working.
    redirects: async () => [
        {
            destination: '/clients',
            permanent: true,
            source: '/work',
        },
    ],
};

export default nextConfig;
