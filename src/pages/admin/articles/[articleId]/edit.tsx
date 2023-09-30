import ArticleForm from "@/components/ArticleForm"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const EditArticlePage = () => {
    const router = useRouter()
    const { articleId } = router.query

    if (!articleId) {
        toast.error("Article ID not found")
        return null
    }

    return (
        <div>
            <h1>Edit Article</h1>
            <ArticleForm
                mode="edit"
                articleId={articleId as string}
                onSuccessRedirect={() => router.push(`/admin/containers/${articleId}`)}
            />
        </div>
    )
}

export default EditArticlePage
