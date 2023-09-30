import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { createLanguageSchema } from "@/utils/schemas/language-schema"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerAuthSession({ req, res })

    if (!session?.isAdmin) {
        res.status(403).json({ error: "Not authorized" })
        return
    }

    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        return
    }

    const languageData = req.body
    const result = createLanguageSchema.safeParse(languageData)

    if (!result.success) {
        res.status(400).json({
            error: "Invalid language data.",
            details: result.error.formErrors.fieldErrors,
        })
        return
    }

    try {
        const newLanguage = await prisma.language.create({
            data: languageData,
        })

        res.status(201).json(newLanguage)
    } catch (error) {
        res.status(500).json({ error: "Error creating language." })
    }
}
