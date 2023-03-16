import fs from "fs"
import path from "path"

import grayMatter from "gray-matter"
import { unified } from "unified"
import parse from "remark-parse"
import remarkHTML from "remark-html"

const ARTICLES_PATH = path.resolve(`src`, `_articles`)

async function getArticle(locale: string, slug: string) {
    const fileContent = fs.readFileSync(`${ARTICLES_PATH}/${locale}/${slug}.md`, `utf-8`)

    const { content, data: metadata } = grayMatter(fileContent)

    const htmlContent = unified().use(parse).use(remarkHTML).processSync(content).toString()

    return {
        metadata: {
            ...metadata,
            slug,
        },
        content: htmlContent,
    }
}

export default getArticle
