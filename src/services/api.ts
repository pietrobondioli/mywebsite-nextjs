import { Comment } from "@prisma/client"

import { CommentWithRepliesAndAuthor } from "@/pages/api/articles/[id]/comments"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? ``

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
