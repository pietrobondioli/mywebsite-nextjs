import { prisma } from "@/server/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id: articleId } = req.query

    try {
        if (req.method === `GET`) {
            if (!articleId || typeof articleId !== `string`) {
                return res.status(400).json({ error: `Invalid article ID` })
            }

            const clapCount = await prisma.clap.count({
                where: { articleId: articleId },
            })

            return res.json({ clapCount })
        }

        if (req.method === `POST`) {
            if (!articleId || typeof articleId !== `string`) {
                return res.status(400).json({ error: `Invalid article ID` })
            }

            const clap = await prisma.clap.create({
                data: {
                    articleId: articleId,
                },
            })

            return res.json(clap)
        }
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }

    return res.status(405).end()
}
