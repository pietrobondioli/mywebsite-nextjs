import { Article } from "@prisma/client"

import { ArticlePreview } from "@/services/api"

export type ArticlesByCategory = Record<string, ArticlePreview[]>

export function reduceArticlesByCategory(articles: (Article | ArticlePreview)[]) {
    return articles.reduce<ArticlesByCategory>((acc, article) => {
        const category = article.category || ``
        const articles = acc[category] ?? []

        return {
            ...acc,
            [category]: [...articles, article],
        }
    }, {})
}
