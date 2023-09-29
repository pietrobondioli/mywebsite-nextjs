import { prisma } from "@/server/db"
import { createArticleContainerSchema } from "@/utils/schemas/article-container-schema"
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

    const containerData = req.body
    const result = createArticleContainerSchema.safeParse(containerData)

    if (!result.success) {
        res.status(400).json({
            error: "Invalid container data.",
            details: result.error.formErrors.fieldErrors,
        })
        return
    }

    try {
        const newContainer = await prisma.articleContainer.create({
            data: containerData,
        })

        res.status(201).json(newContainer)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error creating container.`
        res.status(500).json({ error: errorMessage })
    }
}
