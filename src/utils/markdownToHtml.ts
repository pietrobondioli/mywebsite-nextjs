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
import langJs from "highlight.js/lib/languages/javascript"
import langTs from "highlight.js/lib/languages/typescript"
import langJson from "highlight.js/lib/languages/json"
import langCss from "highlight.js/lib/languages/css"
import langHtml from "highlight.js/lib/languages/xml"
import langShell from "highlight.js/lib/languages/shell"
import langBash from "highlight.js/lib/languages/bash"
import langCSharp from "highlight.js/lib/languages/csharp"

const CODE_LANGUAGES = {
    http: langHttp,
    nginx: langNginx,
    yaml: langYaml,
    js: langJs,
    ts: langTs,
    json: langJson,
    css: langCss,
    html: langHtml,
    shell: langShell,
    bash: langBash,
    cs: langCSharp,
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
