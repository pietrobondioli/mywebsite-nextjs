import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug, targetLangCode } = req.query

    if (!slug || !targetLangCode) {
        return res.status(400).json({ error: `Parameters missing` })
    }
    if (typeof slug !== `string` || typeof targetLangCode !== `string`) {
        return res.status(400).json({ error: `Invalid parameters` })
    }

    try {
        const originalArticle = await prisma.article.findUnique({
            where: {
                slug: slug,
            },
            select: {
                article_container_id: true,
            },
        })

        if (!originalArticle) {
            return res.status(404).json({ error: `Original article not found` })
        }

        const translatedArticle = await prisma.article.findFirst({
            where: {
                article_container_id: originalArticle.article_container_id,
                lang: {
                    code: targetLangCode,
                },
            },
            select: {
                slug: true,
            },
        })

        if (!translatedArticle) {
            return res.status(404).json({ error: `Translated article not found` })
        }

        return res.status(200).json({ translatedSlug: translatedArticle.slug })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Server error`

        return res.status(500).json({ error: `Server error: ${errorMessage}` })
    }
}
