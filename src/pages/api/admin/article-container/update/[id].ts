import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerAuthSession({ req, res })

    if (!session?.isAdmin) {
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
        await prisma.articleContainer.update({
            where: { id },
            data: req.body,
        })

        res.status(204).end()
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error deleting container.`

        res.status(500).json({ error: errorMessage })
    }
}
