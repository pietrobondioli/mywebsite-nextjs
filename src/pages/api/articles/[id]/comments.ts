import { NextApiRequest, NextApiResponse } from "next/types"

import { prisma } from "@/server/db"

export type ThreadComment = {
    replies?: {
        id: string
        content: string
        parent_id: string | null
        article_id: string
        author_id: string
    }[]
} & {
    id: string
    content: string
    parent_id: string | null
    article_id: string
    author_id: string
}

export type CommentThread = ThreadComment[]

function structureComments(comments: CommentThread) {
    const topLevelComments = comments.filter((comment) => !comment.parent_id)
    const nestedComments = comments.filter((comment) => comment.parent_id)

    const findChildren = (parentComment: ThreadComment) => {
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
            },
        })

        const structuredComments = structureComments(allComments)
        return res.json(structuredComments)
    }

    return res.status(405).end()
}
