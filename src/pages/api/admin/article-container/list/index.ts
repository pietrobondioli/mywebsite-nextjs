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

    try {
        const containers = await prisma.articleContainer.findMany()
        res.status(200).json(containers)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Error fetching containers.`
        res.status(500).json({ error: errorMessage })
    }
}
