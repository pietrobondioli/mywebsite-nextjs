import { NextApiRequest, NextApiResponse } from "next"

import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id: articleId } = req.query

    try {
        const user = await getServerAuthSession({ req, res })

        if (req.method === `GET`) {
            if (!articleId || typeof articleId !== `string`) {
                return res.status(400).json({ error: `Invalid article ID` })
            }

            const clapCount = await prisma.clap.count({
                where: { articleId: articleId },
            })

            const existingClap =
                user &&
                (await prisma.clap.findFirst({
                    where: {
                        userId: user.id,
                        articleId: articleId,
                    },
                }))

            return res.json({ clapCount, userClapped: !!existingClap })
        }

        if (!user) {
            return res.status(401).json({ error: `User is not authenticated` })
        }

        if (req.method === `POST`) {
            if (!articleId || typeof articleId !== `string`) {
                return res.status(400).json({ error: `Invalid article ID` })
            }

            const clap = await prisma.clap.create({
                data: {
                    userId: user.id,
                    articleId: articleId,
                },
            })

            return res.json(clap)
        }

        if (req.method === `DELETE`) {
            if (!articleId || typeof articleId !== `string`) {
                return res.status(400).json({ error: `Invalid article ID` })
            }

            const existingClap = await prisma.clap.findFirst({
                where: {
                    userId: user.id,
                    articleId: articleId,
                },
            })

            if (!existingClap) {
                return res.status(404).json({ error: `Clap not found` })
            }

            await prisma.clap.delete({ where: { id: existingClap.id } })
            return res.status(204).end()
        }
    } catch (error: any) {
        if (error.message === `User is not authenticated`) {
            return res.status(401).json({ error: `User is not authenticated` })
        }
        return res.status(500).json({ error: error.message })
    }

    return res.status(405).end()
}
