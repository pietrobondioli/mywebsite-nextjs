import useSWR, { mutate } from "swr"
import { useState } from "react"
import { signIn, useSession } from "next-auth/react"

import {
    CommentThread,
    createComment,
    deleteComment,
    fetchCommentsForArticle,
    ThreadComment,
    updateComment,
} from "@/services/api"

function CommentForm({ onSubmit }: { onSubmit: (content: string, parentId?: string) => void }) {
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
                className="w-full p-2 border rounded shadow-md dark:bg-secondary dark:text-white focus:shadow-sm hover:shadow-sm focus:bg-white-700 focus:outline focus:ring-1 focus:ring-primary"
                rows={3}
            />
            <button type="submit" className="mt-2 px-4 py-2 bg-primary text-white rounded">
                Submit
            </button>
        </form>
    )
}

function CommentItem({
    comment,
    onReply,
    onUpdate,
    onDelete,
    level = 0,
}: {
    comment: ThreadComment
    onReply: (content: string, parentId: string) => void
    onUpdate: (id: string, updatedData: any) => void
    onDelete: (id: string) => void
    level?: number
}) {
    const { data: session } = useSession()
    const [isEditing, setIsEditing] = useState(false)
    const [isReplying, setIsReplying] = useState(false)
    const [editedContent, setEditedContent] = useState(comment.content)

    const handleReply = (content: string) => {
        setIsReplying(false)
        onReply(content, comment.id)
    }

    const handleUpdate = () => {
        setIsEditing(false)
        onUpdate(comment.id, { content: editedContent })
    }

    return (
        <div
            className="border p-2 mt-2 dark:text-white shadow-sm bg-white dark:bg-secondary"
            style={{ marginLeft: `${level * 20}px` }}
        >
            <p>{comment.content}</p>
            {!isEditing && (
                <>
                    {session?.user.id === comment.author_id && (
                        <>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="mt-2 px-4 py-2 bg-orange text-white rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(comment.id)}
                                className="mt-2 px-4 py-2 bg-red text-white rounded mr-2"
                            >
                                Delete
                            </button>
                        </>
                    )}
                    <button
                        onClick={() => setIsReplying(true)}
                        className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
                    >
                        Reply
                    </button>
                    {isReplying && <CommentForm onSubmit={handleReply} />}
                    {comment.replies?.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            onReply={onReply}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            level={level + 1}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

function CommentList({
    comments,
    onReply,
    onUpdate,
    onDelete,
}: {
    comments: any[]
    onReply: (content: string, parentId: string) => void
    onUpdate: (id: string, updatedData: any) => void
    onDelete: (id: string) => void
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
                />
            ))}
        </div>
    )
}

function LoginDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null

    return (
        <div
            className="fixed z-50 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-grey-opaque dark:bg-black bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>
                <div className="inline-block align-bottom bg-white dark:bg-secondary text-secondary dark:text-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="mt-3 text-center sm:mt-5">
                        <h3
                            className="text-lg leading-6 font-medium text-primary-dark dark:text-white"
                            id="modal-title"
                        >
                            Login Required
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-grey dark:text-white">
                                You need to be logged in to reply to a comment.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                        <button
                            type="button"
                            onClick={() => {
                                signIn()
                                onClose()
                            }}
                            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark sm:text-sm"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="mt-3 inline-flex justify-center w-full rounded-md border border-grey dark:border-grey-opaque shadow-sm px-4 py-2 bg-white dark:bg-secondary text-secondary dark:text-white hover:bg-white-500 dark:hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark sm:text-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CommentsContainer({ articleId }: { articleId: string }) {
    const { data: session } = useSession()

    const { data: comments, error } = useSWR<CommentThread>(articleId, fetchCommentsForArticle)

    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)

    const handleAddComment = async (content: string, parentId?: string) => {
        if (!session) {
            setIsLoginDialogOpen(true)
            return
        }
        await createComment(content, articleId, parentId)
        mutate(articleId)
    }

    const handleUpdateComment = async (id: string, updatedData: any) => {
        await updateComment(id, updatedData)
        mutate(articleId)
    }

    const handleDeleteComment = async (id: string) => {
        await deleteComment(id)
        mutate(articleId)
    }

    if (error) return <div>Error loading comments</div>

    return (
        <>
            <LoginDialog isOpen={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)} />
            <div className="mt-8">
                <h2 className="text-2xl mb-4 text-primary-dark dark:text-white">Comments</h2>
                <CommentForm onSubmit={handleAddComment} />
                <CommentList
                    comments={comments || []}
                    onReply={handleAddComment}
                    onUpdate={handleUpdateComment}
                    onDelete={handleDeleteComment}
                />
            </div>
        </>
    )
}
