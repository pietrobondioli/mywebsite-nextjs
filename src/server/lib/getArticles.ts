import { Article } from "@prisma/client"

import { prisma } from "../db"

export type ArticlePreview = Omit<Article, "content">

export const getArticles = async <T extends boolean>({
    lang,
    slug,
    preview,
}: {
    lang?: string
    slug?: string
    preview: T
}): Promise<T extends true ? ArticlePreview[] : Article[]> => {
    const whereClause: any = {}
    if (lang) whereClause.lang = lang
    if (slug) whereClause.slug = slug

    const selectClause: any = {
        id: true,
        slug: true,
        title: true,
        lang: true,
        published_at: true,
        last_modified: true,
        author_name: true,
        excerpt: true,
        image_url: true,
        image_alt: true,
        comments: true,
        category: true,
        // Explicitly skip content
        content: false,
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
