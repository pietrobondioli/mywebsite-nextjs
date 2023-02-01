/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  esModule: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 150,
    };

    return config;
  },
  env: {
    DOMAIN_NAME: 'www.pietrobondioli.com.br',
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
  },
//   webpack: (config) => {
//     generateSitemap();
//     generateRobotsTxt();
//     return config;
//   }
};

module.exports = nextConfig
