import { prisma } from "@/server/db"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req })

    if (!session?.user.isAdmin) {
        res.status(403).json({ error: "Not authorized" })
        return
    }

    if (req.method !== "DELETE") {
        res.setHeader("Allow", ["DELETE"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        return
    }

    const { id } = req.query

    if (!id || typeof id !== "string") {
        res.status(400).json({ error: "Missing article id." })
        return
    }

    try {
        await prisma.article.delete({
            where: { id },
        })

        res.status(204).end()
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error deleting article.`

        res.status(500).json({ error: errorMessage })
    }
}
