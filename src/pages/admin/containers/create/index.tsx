import { ContainerForm } from "@/components/ContainerForm"
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

const CreateContainerPage = () => {
    const router = useRouter()

    return (
        <Section>
            <SectionTitle title="Create a Container" goBack={() => router.back()} />
            <ContainerForm
                mode="create"
                onSuccessRedirect={() => router.push("/admin/containers")}
            />
        </Section>
    )
}

export default CreateContainerPage
