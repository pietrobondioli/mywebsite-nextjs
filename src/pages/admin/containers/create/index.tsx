import ContainerForm from "@/components/ContainerForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { useRouter } from "next/router"

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
