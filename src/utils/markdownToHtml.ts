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

const CODE_LANGUAGES = {
    http: langHttp,
    nginx: langNginx,
    yaml: langYaml,
}

export async function markdownToHtml(mdContent: string): Promise<string> {
    const processor = unified()
        .use(markdown)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(highlight, { languages: CODE_LANGUAGES })
        .use(hrehypeStringify)

    const htmlContent = (await processor.process(mdContent)).toString()

    return htmlContent
}
