import { NextApiRequest, NextApiResponse } from "next/types"

import { prisma } from "@/server/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    if (!id) return res.status(400).json({ error: `Missing article id` })

    if (typeof id !== `string`) return res.status(400).json({ error: `Invalid article id` })

    if (req.method === `GET`) {
        const article = await prisma.article.findUnique({ where: { id } })
        if (!article) return res.status(404).json({ error: `Article not found` })
        return res.json(article)
    }

    return res.status(405).end()
}
