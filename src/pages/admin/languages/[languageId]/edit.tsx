import LanguageForm from "@/components/LanguageForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const EditLanguagePage = () => {
    const router = useRouter()
    const { languageId } = router.query

    if (!languageId || Array.isArray(languageId)) {
        toast.error("Language ID not found")
        return null
    }

    return (
        <Section>
            <SectionTitle title={`Edit Language ${languageId}`} goBack={() => router.back()} />
            <LanguageForm
                mode="edit"
                languageId={languageId}
                onSuccessRedirect={() => router.push("/admin/languages")}
            />
        </Section>
    )
}

export default EditLanguagePage
