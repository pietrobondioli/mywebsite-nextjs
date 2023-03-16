/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
    esModule: true,
    env: {
        DOMAIN_NAME: "www.pietrobondioli.com.br",
    },
    i18n,
}

module.exports = nextConfig
