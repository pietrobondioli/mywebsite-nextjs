import { Article } from "@prisma/client"

import { prisma } from "@/server/db"

export const getArticleById = async (id: string): Promise<Article | null> => {
    const article = await prisma.article.findUnique({ where: { id } })

    return article
}
