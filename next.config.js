/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
    env: {
        DOMAIN_NAME: "www.pietrobondioli.com.br",
    },
    i18n,
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "/",
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
