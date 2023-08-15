import { NextApiRequest, NextApiResponse } from "next/types"

import { prisma } from "@/server/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === `GET`) {
        const articles = await prisma.article.findMany()
        return res.json(articles)
    }

    return res.status(405).end()
}
