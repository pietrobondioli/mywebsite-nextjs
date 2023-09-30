import LanguageForm from "@/components/LanguageForm"
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
        <div>
            <h1>Edit Language</h1>
            <LanguageForm
                mode="edit"
                languageId={languageId}
                onSuccessRedirect={() => router.push("/admin/languages")}
            />
        </div>
    )
}

export default EditLanguagePage
