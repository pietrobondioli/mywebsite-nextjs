import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug, targetLangCode } = req.query

    if (!slug || !targetLangCode) {
        return res.status(400).json({ error: `Parameters missing` })
    }
    if (typeof slug !== `string` || typeof targetLangCode !== `string`) {
        return res.status(400).json({ error: `Invalid parameters` })
    }

    try {
        const translation = await prisma.slugTranslation.findFirst({
            where: {
                sourceSlug: slug,
                targetLang: {
                    code: targetLangCode,
                },
            },
        })

        if (!translation) {
            return res.status(404).json({ error: `Translation not found` })
        }

        return res.status(200).json({ translatedSlug: translation.targetSlug })
    } catch (error) {
        return res.status(500).json({ error: `Server error` })
    }
}
