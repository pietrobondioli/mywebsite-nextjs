import { prisma } from "@/server/db"
import { articleSchema } from "@/utils/schemas/article-schema"
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
        res.status(400).json({ error: "Missing article id." })
        return
    }

    const articleData = req.body
    const result = articleSchema.safeParse(articleData)

    if (!result.success) {
        res.status(400).json({
            error: "Invalid article data.",
            details: result.error.formErrors.fieldErrors,
        })
        return
    }

    try {
        const updatedArticle = await prisma.article.update({
            where: { id },
            data: articleData,
        })

        res.status(200).json(updatedArticle)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error updating article.`

        res.status(500).json({ error: errorMessage })
    }
}
