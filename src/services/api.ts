import { Article, Comment } from "@prisma/client"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? ``

export type ArticlePreview = Omit<Article, "content">

export const fetchArticles = async <T extends boolean>({
    lang,
    slug,
    preview,
}: {
    lang?: string
    slug?: string
    preview: T
}): Promise<T extends true ? ArticlePreview[] : Article[]> => {
    const params = new URLSearchParams()
    if (lang) params.append(`lang`, lang)
    if (slug) params.append(`slug`, slug)
    if (preview) params.append(`preview`, `true`)

    const response = await fetch(`${API_BASE_URL}/articles?${params}`)
    return response.json()
}

export const fetchArticleById = async (id: string): Promise<Article> => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`)
    if (!response.ok) throw new Error(`Failed to fetch article`)
    return response.json()
}

export type ThreadComment = {
    replies?: {
        id: string
        content: string
        parent_id: string | null
        article_id: string
        author_id: string
    }[]
} & {
    id: string
    content: string
    parent_id: string | null
    article_id: string
    author_id: string
}

export type CommentThread = ThreadComment[]

export const fetchCommentsForArticle = async (articleId: string): Promise<CommentThread> => {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}/comments`)
    if (!response.ok) throw new Error(`Failed to fetch comments`)
    return response.json()
}

export const createComment = async (content: string, articleId: string): Promise<Comment> => {
    const response = await fetch(`${API_BASE_URL}/comments`, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({ content, article_id: articleId }),
    })
    return response.json()
}

export const updateComment = async (id: string, updatedData: any): Promise<Comment> => {
    const params = new URLSearchParams()
    if (id) params.append(`id`, id)

    const response = await fetch(`${API_BASE_URL}/comments?${params}`, {
        method: `PUT`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(updatedData),
    })
    return response.json()
}

export const deleteComment = async (id: string): Promise<void> => {
    const params = new URLSearchParams()
    if (id) params.append(`id`, id)

    const response = await fetch(`${API_BASE_URL}/comments?${params}`, {
        method: `DELETE`,
    })
    if (!response.ok) throw new Error(`Failed to delete comment`)
}
