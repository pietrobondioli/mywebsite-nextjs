import { prisma } from "@/server/db"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req })

    if (!session?.user.isAdmin) {
        res.status(403).json({ error: "Not authorized" })
        return
    }

    if (req.method !== "PUT") {
        res.setHeader("Allow", ["PUT"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        return
    }

    const { id } = req.query

    if (!id || typeof id !== "string") {
        res.status(400).json({ error: "Missing article container id." })
        return
    }

    try {
        const relatedArticles = await prisma.article.findMany({
            where: { article_container_id: id },
        })

        if (relatedArticles.length > 0) {
            res.status(400).json({
                error: "Cannot delete container with associated articles.",
            })
            return
        }

        await prisma.articleContainer.delete({
            where: { id },
        })

        res.status(204).end()
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error deleting container.`

        res.status(500).json({ error: errorMessage })
    }
}
