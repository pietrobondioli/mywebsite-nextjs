import { NextApiRequest, NextApiResponse } from "next/types"

import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    try {
        const user = await getServerAuthSession({ req, res })

        if (!user) return res.status(401).json({ error: `User is not authenticated` })

        if (req.method === `POST`) {
            const { content, article_id, parent_id } = req.body
            const comment = await prisma.comment.create({
                data: {
                    content,
                    article_id,
                    author_id: user.id,
                    parent_id,
                },
            })
            return res.json(comment)
        }

        if (!id) return res.status(400).json({ error: `Missing comment id` })

        if (typeof id !== `string`) return res.status(400).json({ error: `Invalid comment id` })

        if (req.method === `PUT`) {
            const existingComment = await prisma.comment.findUnique({ where: { id } })

            if (!existingComment) return res.status(404).json({ error: `Comment not found` })

            if (existingComment.author_id !== user.id) {
                return res
                    .status(403)
                    .json({ error: `You don't have permission to update this comment` })
            }

            const updatedComment = await prisma.comment.update({
                where: { id },
                data: {
                    content: req.body.content,
                    edited_at: new Date(),
                },
            })
            return res.json(updatedComment)
        }

        if (req.method === `DELETE`) {
            const existingComment = await prisma.comment.findUnique({ where: { id } })

            if (!existingComment) return res.status(404).json({ error: `Comment not found` })

            if (existingComment.author_id !== user.id) {
                return res
                    .status(403)
                    .json({ error: `You don't have permission to delete this comment` })
            }

            await prisma.comment.delete({ where: { id } })
            return res.status(204).end()
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Unknown error`

        return res.status(500).json({ error: errorMessage })
    }

    return res.status(405).end()
}
