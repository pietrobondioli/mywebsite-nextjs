import { NextApiRequest, NextApiResponse } from "next/types"
import { Prisma } from "@prisma/client"

import { prisma } from "@/server/db"

export type CommentWithRepliesAndAuthor = Prisma.CommentGetPayload<{
    include: {
        replies: true
        author: {
            select: {
                id: true
                name: true
            }
        }
    }
}>

function structureComments(comments: CommentWithRepliesAndAuthor[]) {
    const topLevelComments = comments.filter((comment) => !comment.parent_id)
    const nestedComments = comments.filter((comment) => comment.parent_id)

    const findChildren = (parentComment: any) => {
        parentComment.replies = nestedComments.filter(
            (reply) => reply.parent_id === parentComment.id
        )
        parentComment.replies.forEach(findChildren)
    }

    topLevelComments.forEach(findChildren)

    return topLevelComments
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { id: article_id } = req.query

    if (!article_id) return res.status(400).json({ error: `Missing article id` })
    if (typeof article_id !== `string`) return res.status(400).json({ error: `Invalid article id` })

    if (req.method === `GET`) {
        const allComments = await prisma.comment.findMany({
            where: { article_id },
            include: {
                replies: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        })

        const structuredComments = structureComments(allComments)
        return res.json(structuredComments)
    }

    return res.status(405).end()
}
