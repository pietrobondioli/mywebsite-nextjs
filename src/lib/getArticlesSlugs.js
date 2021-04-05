import fs from 'fs';
import path from 'path';

const ARTICLES_PATH = path.resolve('src', '_articles');

async function getArticlesSlugs(locales) {
  const articlesSlugs = locales.reduce((map, locale) => {
    const fileNames = fs.readdirSync(`${ARTICLES_PATH}/${locale}/`, 'utf-8');
    const slugs = fileNames.map((fileName) => {
      return fileName.replace('.md', '');
    });
    return { ...map, [locale]: slugs };
  }, {});

  return articlesSlugs;
}

export default getArticlesSlugs;
