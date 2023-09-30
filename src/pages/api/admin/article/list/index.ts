import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerAuthSession({ req, res })

    if (!session?.isAdmin) {
        res.status(403).json({ error: "Not authorized" })
        return
    }

    if (req.method !== "GET") {
        res.setHeader("Allow", ["GET"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        return
    }

    const { articleContainerId } = req.query

    if (articleContainerId && typeof articleContainerId !== "string") {
        res.status(400).json({ error: "Invalid articleContainerId" })
        return null
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
                category: true,
                lang_id: true,
                article_container_id: true,
            },
            orderBy: {
                published_at: "desc",
            },
            where: {
                article_container: {
                    id: articleContainerId,
                },
            },
        })

        res.json(articles)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error fetching articles.`
        res.status(500).json({ error: errorMessage })
    }
}
