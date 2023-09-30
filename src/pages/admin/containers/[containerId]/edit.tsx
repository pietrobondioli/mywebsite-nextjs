import ContainerForm from "@/components/ContainerForm"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const EditContainerPage = () => {
    const router = useRouter()
    const { containerId } = router.query

    if (!containerId || Array.isArray(containerId)) {
        toast.error("Container ID not found")
        return null
    }

    return (
        <Section>
            <SectionTitle title={`Edit Container ${containerId}`} goBack={() => router.back()} />
            <ContainerForm
                mode="edit"
                containerId={containerId}
                onSuccessRedirect={() => router.push("/admin/containers")}
            />
        </Section>
    )
}

export default EditContainerPage
