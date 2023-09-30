import LanguageForm from "@/components/LanguageForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { useRouter } from "next/router"

const CreateLanguagePage = () => {
    const router = useRouter()

    return (
        <Section>
            <SectionTitle title="Create a Language" goBack={() => router.back()} />
            <LanguageForm mode="create" onSuccessRedirect={() => router.push("/admin/languages")} />
        </Section>
    )
}

export default CreateLanguagePage
