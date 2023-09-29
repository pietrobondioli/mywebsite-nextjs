import { prisma } from "@/server/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id: articleId } = req.query

    try {
        if (req.method === `GET`) {
            if (!articleId || typeof articleId !== `string`) {
                return res.status(400).json({ error: `Invalid article ID` })
            }

            const article = await prisma.article.findUnique({
                where: { id: articleId },
                select: { clapCount: true },
            })

            return res.json({ clapCount: article?.clapCount ?? 0 })
        }

        if (req.method === `POST`) {
            if (!articleId || typeof articleId !== `string`) {
                return res.status(400).json({ error: `Invalid article ID` })
            }

            await prisma.article.update({
                where: { id: articleId },
                data: {
                    clapCount: {
                        increment: 1,
                    },
                },
            })

            return res.json({
                message: `Clap added`,
            })
        }
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }

    return res.status(405).end()
}
