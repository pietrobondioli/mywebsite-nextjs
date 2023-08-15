const API_BASE_URL = `/api`

export const fetchArticles = async (lang?: string, slug?: string): Promise<any[]> => {
    const params = new URLSearchParams()
    if (lang) params.append(`lang`, lang)
    if (slug) params.append(`slug`, slug)

    const response = await fetch(`${API_BASE_URL}/articles?${params}`)
    return response.json()
}

export const fetchArticleById = async (id: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`)
    if (!response.ok) throw new Error(`Failed to fetch article`)
    return response.json()
}

export const fetchCommentsForArticle = async (articleId: string): Promise<any[]> => {
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}/comments`)
    if (!response.ok) throw new Error(`Failed to fetch comments`)
    return response.json()
}

export const createComment = async (content: string, articleId: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/comments`, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({ content, article_id: articleId }),
    })
    return response.json()
}

export const updateComment = async (id: string, updatedData: any): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
        method: `PUT`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(updatedData),
    })
    return response.json()
}

export const deleteComment = async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
        method: `DELETE`,
    })
    if (!response.ok) throw new Error(`Failed to delete comment`)
}
