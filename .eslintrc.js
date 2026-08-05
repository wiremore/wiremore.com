module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['next/core-web-vitals', 'prettier'],
    rules: {
        'react/no-unescaped-entities': 'off',
        // Client logos are plain SVG files served from /public. next/image adds nothing
        // for vector assets and refuses to optimise them anyway.
        '@next/next/no-img-element': 'off',
    },
};
