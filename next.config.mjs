import path from 'node:path';
import i18nConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: i18nConfig.i18n,
    reactStrictMode: true,
    // Required for i18n hack
    // trailingSlash: true,
    webpack: (config) => {
        config.resolve.alias.react = path.resolve('node_modules/react');
        config.resolve.alias['react-dom'] = path.resolve('node_modules/react-dom');
        return config;
    },
};

export default nextConfig;
