import ContainerForm from "@/components/ContainerForm"
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
        <div>
            <h1>Edit Container</h1>
            <ContainerForm
                mode="edit"
                containerId={containerId}
                onSuccessRedirect={() => router.push("/admin/containers")}
            />
        </div>
    )
}

export default EditContainerPage
