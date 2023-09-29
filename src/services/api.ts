import {
    CreateArticleContainerSchemaType,
    UpdateArticleContainerSchemaType,
} from "@/utils/schemas/article-container-schema"
import { CreateLanguageSchemaType, UpdateLanguageSchemaType } from "@/utils/schemas/language-schema"
import { Article, ArticleContainer, Comment, Language } from "@prisma/client"

import { CommentWithRepliesAndAuthor } from "@/pages/api/articles/[id]/comments"
import { ArticleSchemaType } from "@/utils/schemas/article-schema"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? ``

export const fetchTranslatedSlug = async (
    currentSlug: string,
    targetLangCode: string
): Promise<string> => {
    const response = await fetch(
        `${API_BASE_URL}/articles/translated-slug?slug=${currentSlug}&targetLangCode=${targetLangCode}`
    )
    if (!response.ok) throw new Error(`Failed to fetch translated slug`)
    const { translatedSlug } = await response.json()

    return translatedSlug
}

export const fetchCommentsForArticle = async (
    articleId: string
): Promise<CommentWithRepliesAndAuthor[]> => {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}/comments`)
    if (!response.ok) throw new Error(`Failed to fetch comments`)
    return response.json()
}

export const createComment = async (
    content: string,
    articleId: string,
    parentId?: string
): Promise<Comment> => {
    const response = await fetch(`${API_BASE_URL}/comments`, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({ content, article_id: articleId, parent_id: parentId }),
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

export const getClapCount = async (
    articleId: string
): Promise<{ clapCount: number; userClapped: boolean }> => {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}/claps`)
    if (!response.ok) throw new Error(`Failed to fetch clap count`)

    return response.json()
}

export const addClap = async (articleId: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}/claps`, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
    })
    if (!response.ok) throw new Error(`Failed to add clap`)
}

export const fetchLanguages = async (): Promise<Language[]> => {
    const response = await fetch(`${API_BASE_URL}/language/list`)
    if (!response.ok) throw new Error("Failed to fetch languages")
    return response.json()
}

export const fetchLanguageById = async (id: string): Promise<Language> => {
    const response = await fetch(`${API_BASE_URL}/language/${id}`)
    if (!response.ok) throw new Error("Failed to fetch language by id")
    return response.json()
}

export const createLanguage = async (data: CreateLanguageSchemaType): Promise<Language> => {
    const response = await fetch(`${API_BASE_URL}/language/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to create language")
    return response.json()
}

export const updateLanguage = async (
    id: string,
    data: UpdateLanguageSchemaType
): Promise<Language> => {
    const response = await fetch(`${API_BASE_URL}/language/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to update language")
    return response.json()
}

export const deleteLanguage = async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/language/delete/${id}`, {
        method: "DELETE",
    })
    if (!response.ok) throw new Error("Failed to delete language")
}

export const fetchArticleContainers = async (): Promise<ArticleContainer[]> => {
    const response = await fetch(`${API_BASE_URL}/article-container/list`)
    if (!response.ok) throw new Error("Failed to fetch article containers")
    return response.json()
}

export const fetchArticleContainerById = async (id: string): Promise<ArticleContainer> => {
    const response = await fetch(`${API_BASE_URL}/article-container/${id}`)
    if (!response.ok) throw new Error("Failed to fetch article container by id")
    return response.json()
}

export const createArticleContainer = async (
    data: CreateArticleContainerSchemaType
): Promise<ArticleContainer> => {
    const response = await fetch(`${API_BASE_URL}/article-container/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to create article container")
    return response.json()
}

export const updateArticleContainer = async (
    id: string,
    data: UpdateArticleContainerSchemaType
): Promise<ArticleContainer> => {
    const response = await fetch(`${API_BASE_URL}/article-container/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to update article container")
    return response.json()
}

export const deleteArticleContainer = async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/article-container/delete/${id}`, {
        method: "DELETE",
    })
    if (!response.ok) throw new Error("Failed to delete article container")
}

export const fetchArticles = async (): Promise<Article[]> => {
    const response = await fetch(`${API_BASE_URL}/article/list`)
    if (!response.ok) throw new Error("Failed to fetch articles")
    return response.json()
}

export const fetchArticleById = async (id: string): Promise<Article> => {
    const response = await fetch(`${API_BASE_URL}/article/${id}`)
    if (!response.ok) throw new Error("Failed to fetch article by id")
    return response.json()
}

export const createArticle = async (data: ArticleSchemaType): Promise<Article> => {
    const response = await fetch(`${API_BASE_URL}/article/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to create article")
    return response.json()
}

export const updateArticle = async (id: string, data: ArticleSchemaType): Promise<Article> => {
    const response = await fetch(`${API_BASE_URL}/article/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to update article")
    return response.json()
}

export const deleteArticle = async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/article/delete/${id}`, {
        method: "DELETE",
    })
    if (!response.ok) throw new Error("Failed to delete article")
}
