import ArticleForm from "@/components/ArticleForm"
import { useRouter } from "next/router"

const CreateArticlePage = () => {
    const router = useRouter()

    return (
        <div>
            <h1>Create New Article</h1>
            <ArticleForm mode="create" onSuccessRedirect={() => router.push("/admin/containers")} />
        </div>
    )
}

export default CreateArticlePage
