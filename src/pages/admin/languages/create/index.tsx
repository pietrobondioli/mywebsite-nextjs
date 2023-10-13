import { LanguageForm } from "@/components/LanguageForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale ?? `en`, [`common`, `about`])

    return {
        props: {
            ...translations,
        },
    }
}

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
