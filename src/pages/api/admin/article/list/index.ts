import { prisma } from "@/server/db"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req })

    if (!session?.user.isAdmin) {
        res.status(403).json({ error: "Not authorized" })
        return
    }

    if (req.method !== "GET") {
        res.setHeader("Allow", ["GET"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        return
    }

    try {
        const articles = await prisma.article.findMany({
            select: {
                id: true,
                slug: true,
                title: true,
                published_at: true,
                last_modified: true,
                author_name: true,
                excerpt: true,
                image_url: true,
                is_published: true,
                lang: {
                    select: {
                        code: true,
                        name: true,
                    },
                },
                article_container: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                published_at: "desc",
            },
        })

        res.json(articles)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error fetching articles.`
        res.status(500).json({ error: errorMessage })
    }
}
