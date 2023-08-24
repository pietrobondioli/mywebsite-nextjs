import useSWR, { mutate } from "swr"
import { useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { toast } from "react-toastify"

import {
    createComment,
    deleteComment,
    fetchCommentsForArticle,
    updateComment,
} from "@/services/api"
import { CommentWithRepliesAndAuthor } from "@/pages/api/articles/[id]/comments"
import { formatDate } from "@/utils/formatDate"
import { useLoginDialogActions } from "@/components/LoginDialog/useLoginDialog"

function CommentForm({
    onSubmit,
    onCancel,
}: {
    onSubmit: (content: string, parentId?: string) => void
    onCancel?: () => void
}) {
    const [content, setContent] = useState(``)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(content)
        setContent(``)
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col dark:text-white">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border rounded shadow-md bg-gray-100 dark:bg-gray-900 dark:text-white focus:shadow-sm hover:shadow-sm focus:bg-white focus:outline focus:ring-1 focus:ring-primary"
                rows={3}
            />
            <div className="flex space-x-2 mt-2">
                <button type="submit" className="px-3 py-1 bg-primary text-white rounded">
                    Submit
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-3 py-1 bg-gray-300 text-black rounded"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    )
}

function CommentItem({
    comment,
    onReply,
    onUpdate,
    onDelete,
    level = 0,
    openLoginDialog,
}: {
    comment: CommentWithRepliesAndAuthor
    onReply: (content: string, parentId: string) => void
    onUpdate: (id: string, updatedData: any) => void
    onDelete: (id: string) => void
    level?: number
    openLoginDialog?: () => void
}) {
    const { data: session } = useSession()
    const [isEditing, setIsEditing] = useState(false)
    const [isReplying, setIsReplying] = useState(false)

    const handleClickReply = () => {
        if (!session) {
            openLoginDialog?.()
            return
        }
        setIsReplying(true)
    }

    const handleReply = (content: string) => {
        setIsReplying(false)
        onReply(content, comment.id)
    }

    return (
        <div style={{ position: `relative` }}>
            {level > 0 && (
                <div
                    style={{
                        position: `absolute`,
                        left: `${level * 10 - 2}px`,
                        top: 0,
                        bottom: 0,
                        width: `2px`,
                        backgroundColor: `#ccc`,
                    }}
                ></div>
            )}
            <div
                className="border p-2 my-4 dark:text-white shadow-md bg-white dark:bg-secondary border-gray-300"
                style={{ marginLeft: `${level * 10}px` }}
            >
                <p>{comment.content}</p>
                <p className="text-gray-500 mt-2 dark:text-gray-400">By: {comment.author.name}</p>
                <p className="text-gray-400 text-sm mt-1 dark:text-gray-500">
                    Posted on: {formatDate(comment.created_at)}
                    {comment.edited_at && ` | Edited: ${formatDate(comment.edited_at)}`}
                </p>
                {!isEditing && (
                    <>
                        {session?.user.id === comment.author_id && (
                            <>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="mt-2 px-3 py-1 bg-orange-500 text-white rounded mr-2 hover:bg-orange-600 duration-150"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(comment.id)}
                                    className="mt-2 px-3 py-1 bg-red-500 text-white rounded mr-2 hover:bg-red-600 duration-150"
                                >
                                    Delete
                                </button>
                            </>
                        )}
                        <button
                            onClick={handleClickReply}
                            className="mt-2 px-3 py-1 bg-primary text-white rounded hover:bg-blue-600 duration-150"
                        >
                            Reply
                        </button>
                        {isReplying && (
                            <CommentForm
                                onSubmit={handleReply}
                                onCancel={() => setIsReplying(false)}
                            />
                        )}
                    </>
                )}
            </div>

            {comment.replies?.map((reply) => (
                <CommentItem
                    key={reply.id}
                    comment={reply as CommentWithRepliesAndAuthor}
                    onReply={onReply}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    level={level + 1}
                />
            ))}
        </div>
    )
}

function CommentList({
    comments,
    onReply,
    onUpdate,
    onDelete,
    openLoginDialog,
}: {
    comments: any[]
    onReply: (content: string, parentId: string) => void
    onUpdate: (id: string, updatedData: any) => void
    onDelete: (id: string) => void
    openLoginDialog?: () => void
}) {
    return (
        <div className="dark:text-white">
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    onReply={onReply}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    openLoginDialog={openLoginDialog}
                />
            ))}
        </div>
    )
}

export default function CommentsContainer({ articleId }: { articleId: string }) {
    const { data: session } = useSession()

    const { data: comments, error } = useSWR<CommentWithRepliesAndAuthor[]>(
        `articles/${articleId}/comments`,
        () => fetchCommentsForArticle(articleId)
    )

    const { OPEN } = useLoginDialogActions()

    const handleAddComment = async (content: string, parentId?: string) => {
        if (!session) {
            OPEN()
            return
        }
        try {
            await createComment(content, articleId, parentId)

            toast.success(`Comment added`)
        } catch (e) {
            toast.error(`Error adding comment`)
        }
        mutate(articleId)
    }

    const handleUpdateComment = async (id: string, updatedData: any) => {
        try {
            await updateComment(id, updatedData)

            toast.success(`Comment updated`)
        } catch (e) {
            toast.error(`Error updating comment`)
        }
        mutate(articleId)
    }

    const handleDeleteComment = async (id: string) => {
        try {
            await deleteComment(id)

            toast.success(`Comment deleted`)
        } catch (e) {
            toast.error(`Error deleting comment`)
        }
        mutate(articleId)
    }

    if (error) return <div>Error loading comments</div>

    return (
        <>
            <div className="mt-8">
                <h2 className="text-2xl mb-4 text-primary-dark dark:text-white">Comments</h2>
                <CommentForm onSubmit={handleAddComment} />
                <CommentList
                    comments={comments || []}
                    onReply={handleAddComment}
                    onUpdate={handleUpdateComment}
                    onDelete={handleDeleteComment}
                    openLoginDialog={() => OPEN()}
                />
            </div>
        </>
    )
}
