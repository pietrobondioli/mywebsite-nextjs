import { NextApiRequest, NextApiResponse } from "next/types"

import { prisma } from "@/server/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id: article_id } = req.query

    if (!article_id) return res.status(400).json({ error: `Missing article id` })

    if (typeof article_id !== `string`) return res.status(400).json({ error: `Invalid article id` })

    if (req.method === `GET`) {
        const comments = await prisma.comment.findMany({
            where: { article_id },
            include: { replies: true },
        })
        return res.json(comments)
    }

    return res.status(405).end()
}
