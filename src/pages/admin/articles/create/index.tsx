import ArticleForm from "@/components/ArticleForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { useRouter } from "next/router"

const CreateArticlePage = () => {
    const router = useRouter()

    return (
        <Section>
            <SectionTitle title="Create New Article" goBack={() => router.back()} />
            <ArticleForm mode="create" onSuccessRedirect={() => router.push("/admin/containers")} />
        </Section>
    )
}

export default CreateArticlePage
