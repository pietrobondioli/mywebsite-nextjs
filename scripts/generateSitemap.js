const fs = require('fs');
const globby = require('globby');
const moment = require('moment');
const constants = require('./constants');

const LOCALES = ['en-US', 'pt-BR'];
const LAST_MODIFIED = moment().format();

const generateUrl = async ({ loc = '', lang = '', changeFreq = 'weekly', priority = '1.0' }) => {
  return `<url>
<loc>https://${constants.DOMAIN_NAME}${lang}${loc}</loc>
<changefreq>${changeFreq}</changefreq>
<priority>${priority}</priority>
<lastmod>${LAST_MODIFIED}</lastmod></url>`;
};

const generateUrlsWithLanguages = async ({ loc, changeFreq }) => {
  const urls = [];

  LOCALES.forEach(async (locale) => {
    const url = await generateUrl({ loc, lang: `/${locale}`, changeFreq });

    urls.push(url);
  });

  return urls;
};

const createSiteMap = async ({ urls }) => {
  const urlsString = urls.join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlsString}</urlset>`;
};

const generatePagesUrls = async (pages) => {
  const urls = [];

  pages.forEach(async (page) => {
    const path = page
      .replace('src', '')
      .replace('pages', '')
      .replace(/(\.jsx|\.tsx|\.js|\.ts)/, '')
      .replace(/[\/]{2,}/, '/');

    const loc = path === '/index' ? '' : path;

    const urlsWithLang = await generateUrlsWithLanguages({ loc, changeFreq: 'weekly' });

    urls.push(...urlsWithLang);
  });

  return urls;
};

const generateArticlesUrls = async (articles) => {
  const urls = [];

  articles.forEach(async (article) => {
    const loc = article
      .replace('src', '')
      .replace('_articles', '')
      .replace(/(en-US|pt-BR)/, '$1/articles')
      .replace(/(\.mdx|\.md)/, '')
      .replace(/[\/]{2,}/, '/');

    const url = await generateUrl({ loc, changeFreq: 'daily' });

    urls.push(url);
  });

  return urls;
};

const generateSitemap = async () => {
  const pages = await globby([
    'src/pages/*',
    'src/pages/**/*',
    '!src/pages/**/[*',
    '!src/pages/_*',
    '!src/pages/api',
  ]);

  const articles = await globby(['src/_articles/**/*.{md, mdx}']);

  const pagesUrls = await generatePagesUrls(pages);
  const articlesUrls = await generateArticlesUrls(articles);

  const urls = [...pagesUrls, ...articlesUrls];

  const sitemap = await createSiteMap({ urls });

  fs.writeFileSync('public/sitemap.xml', sitemap);
};

module.exports = generateSitemap;
