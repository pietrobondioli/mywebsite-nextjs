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
        res.status(400).json({ error: "Missing language id." })
        return
    }

    try {
        await prisma.language.update({
            where: { id },
            data: req.body,
        })

        res.status(204).end()
    } catch (error) {
        res.status(500).json({ error: "Error updating language." })
    }
}
