import { prisma } from "@/server/db"
import articleSchema from "@/utils/schemas/article-schema"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req })

    if (!session?.user.isAdmin) {
        res.status(403).json({ error: "Not authorized" })
        return
    }

    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
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
        const createdArticle = await prisma.article.create({
            data: articleData,
        })

        res.status(201).json(createdArticle)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error creating article.`

        res.status(500).json({ error: errorMessage })
    }
}
