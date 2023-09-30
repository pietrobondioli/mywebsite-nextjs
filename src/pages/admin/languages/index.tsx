import { Loading } from "@/components/Loading"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { deleteLanguage, fetchLanguages } from "@/services/api"
import Link from "next/link"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import useSWR, { mutate } from "swr"

const LanguageList = () => {
    const { data, error } = useSWR("/api/languages", fetchLanguages)
    const router = useRouter()

    const handleDelete = async (id: string) => {
        try {
            await deleteLanguage(id)
            mutate("/api/languages")
            toast.success("Language deleted!")
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        }
    }

    if (error) return <div>Error loading languages</div>
    if (!data) return <Loading />

    return (
        <Section>
            <SectionTitle title="Languages" goBack={() => router.push("/admin")} />
            <Link
                href="/admin/languages/create"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center duration-150 h-min"
            >
                Create Language
            </Link>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-300 dark:bg-gray-700">
                        <th className="border p-2 text-start">Id</th>
                        <th className="border p-2 text-start">Name</th>
                        <th className="border p-2 text-start">Code</th>
                        <th className="border p-2 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((language) => (
                        <tr
                            key={language.id}
                            className="bg-gray-200 dark:bg-gray-800 odd:bg-gray-50 dark:odd:bg-gray-900"
                        >
                            <td className="border p-2">{language.id}</td>
                            <td className="border p-2">{language.name}</td>
                            <td className="border p-2">{language.code}</td>
                            <td className="border p-2">
                                <Link
                                    href={`/admin/languages/${language.id}/edit`}
                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                >
                                    Edit
                                </Link>
                                <a
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                    onClick={() => handleDelete(language.id)}
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Section>
    )
}

export default LanguageList
