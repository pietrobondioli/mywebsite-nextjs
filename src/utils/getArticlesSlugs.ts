import fs from "fs"
import path from "path"

const ARTICLES_PATH = path.resolve(`src`, `_articles`)

type ArticlesSlugs = { [key: string]: string[] }

/**
 * for each locale, get all articles slugs
 * @param locales - locales to get articles slugs
 * @returns articles slugs, grouped by locale
 */
function getArticlesSlugs(locales: string[]) {
    const articlesSlugs: ArticlesSlugs = locales.reduce((prev, locale) => {
        const fileNames = fs.readdirSync(`${ARTICLES_PATH}/${locale}/`, `utf-8`)
        const slugs = fileNames.map((fileName) => {
            return fileName.replace(`.md`, ``)
        })

        return { ...prev, [locale]: slugs }
    }, {})

    return articlesSlugs
}

export { getArticlesSlugs }
