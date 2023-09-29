import { Article, Prisma } from "@prisma/client"

import { prisma } from "../db"

export type ArticlePreview = Omit<Article, "content" | "article_container">

export const getArticles = async <T extends boolean>({
    lang,
    slug,
    preview,
}: {
    lang?: string
    slug?: string
    preview: T
}): Promise<T extends true ? ArticlePreview[] : Article[]> => {
    const whereClause: Prisma.ArticleWhereInput = {}

    if (lang) whereClause.lang = { code: lang }
    if (slug) whereClause.slug = slug

    const selectClause: Prisma.ArticleSelect = {
        id: true,
        slug: true,
        title: true,
        published_at: true,
        last_modified: true,
        author_name: true,
        excerpt: true,
        image_url: true,
        image_alt: true,
        comments: true,
        category: true,
        lang: { select: { code: true } },
        content: false,
        // Here we don't select the `article_container` by default as it might not be required
        // If you need it later, you can add it to the select
        article_container: false,
        is_published: true,
    }

    if (!preview) {
        selectClause.content = true
    }

    const articles = await prisma.article.findMany({
        where: whereClause,
        select: selectClause,
    })

    return articles as any
}

export type ArticlesByCategory = Record<string, ArticlePreview[]>

export function reduceArticlesByCategory(articles: ArticlePreview[]) {
    return articles.reduce<ArticlesByCategory>((acc, article) => {
        const category = article.category || ``
        const categorizedArticles = acc[category] ?? []

        return {
            ...acc,
            [category]: [...categorizedArticles, article],
        }
    }, {})
}
