import { NextApiRequest, NextApiResponse } from "next/types"

import { prisma } from "@/server/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === `GET`) {
        const { lang, slug } = req.query

        const whereClause: any = {}
        if (lang) whereClause.lang = lang
        if (slug) whereClause.slug = slug

        const articles = await prisma.article.findMany({
            where: whereClause,
            select: {
                id: true,
                slug: true,
                title: true,
                lang: true,
                published_at: true,
                last_modified: true,
                author_name: true,
                excerpt: true,
                image_url: true,
                image_alt: true,
                comments: true,
                category: true,
                // Explicitly skip content
                content: false,
            },
        })

        return res.json(articles)
    }

    return res.status(405).end()
}
