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

    const { id } = req.query

    if (!id || typeof id !== "string") {
        res.status(400).json({ error: "Missing language id." })
        return
    }

    try {
        const language = await prisma.language.findUnique({
            where: { id },
        })

        if (!language) {
            res.status(404).json({ error: "Language not found." })
            return
        }

        res.status(200).json(language)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error fetching language.`
        res.status(500).json({ error: errorMessage })
    }
}
