import fs from "fs"
import path from "path"

import grayMatter from "gray-matter"
import { unified } from "unified"
import markdown from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import hrehypeStringify from "rehype-stringify"
import highlight from "rehype-highlight"
import langHttp from "highlight.js/lib/languages/http"
import langNginx from "highlight.js/lib/languages/nginx"
import langYaml from "highlight.js/lib/languages/yaml"

const ARTICLES_PATH = path.resolve(`src`, `_articles`)

const CODE_LANGUAGES = {
    http: langHttp,
    nginx: langNginx,
    yaml: langYaml,
}

function getArticle(locale: string, slug: string): Article {
    const fileContent = fs.readFileSync(`${ARTICLES_PATH}/${locale}/${slug}.md`, `utf-8`)

    const { content, data: metadata } = grayMatter(fileContent)

    const processor = unified()
        .use(markdown)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(highlight, { languages: CODE_LANGUAGES })
        .use(hrehypeStringify)

    const htmlContent = processor.processSync(content).toString()

    return {
        metadata: {
            ...metadata,
            slug,
        },
        content: htmlContent,
    }
}

export { getArticle }
