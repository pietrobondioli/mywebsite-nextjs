/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    esModule: true,
    env: {
        DOMAIN_NAME: "www.pietrobondioli.com.br",
    },
    i18n: {
        locales: ["en-US", "pt-BR"],
        defaultLocale: "en-US",
    },
}

module.exports = nextConfig
