import LanguageForm from "@/components/LanguageForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale ?? `en`, [`common`, `about`])

    return {
        props: {
            ...translations,
        },
    }
}

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
