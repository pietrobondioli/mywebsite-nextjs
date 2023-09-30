import LanguageForm from "@/components/LanguageForm"
import { useRouter } from "next/router"

const CreateLanguagePage = () => {
    const router = useRouter()

    return (
        <div>
            <h1>Create New Language</h1>
            <LanguageForm mode="create" onSuccessRedirect={() => router.push("/admin/languages")} />
        </div>
    )
}

export default CreateLanguagePage
