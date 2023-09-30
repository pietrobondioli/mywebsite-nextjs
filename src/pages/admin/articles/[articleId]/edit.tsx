import ArticleForm from "@/components/ArticleForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
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
        <Section>
            <SectionTitle title={`Edit Article ${articleId}`} goBack={() => router.back()} />
            <ArticleForm
                mode="edit"
                articleId={articleId as string}
                onSuccessRedirect={() => router.back()}
            />
        </Section>
    )
}

export default EditArticlePage
