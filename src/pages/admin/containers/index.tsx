import { Loading } from "@/components/Loading"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { deleteArticleContainer, fetchArticleContainers } from "@/services/api"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Link from "next/link"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import useSWR, { mutate } from "swr"

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale ?? `en`, [`common`, `about`])

    return {
        props: {
            ...translations,
        },
    }
}

const ContainerList = () => {
    const { data, error } = useSWR("article-containers", fetchArticleContainers)
    const router = useRouter()

    const handleDelete = async (id: string) => {
        try {
            await deleteArticleContainer(id)
            mutate("article-containers")
            toast.success("Container deleted!")
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        }
    }

    if (error) return <div>Error loading containers</div>
    if (!data) return <Loading />

    return (
        <Section>
            <SectionTitle title="Containers" goBack={() => router.push("/admin")} />
            <div className="flex justify-end mb-4">
                <Link
                    href="/admin/containers/create"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center duration-150 h-min"
                >
                    Create Container
                </Link>
            </div>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-300 dark:bg-gray-700">
                        <th className="border p-2 text-start">Id</th>
                        <th className="border p-2 text-start">Name</th>
                        <th className="border p-2 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((container) => (
                        <tr
                            key={container.id}
                            className="bg-gray-200 dark:bg-gray-800 odd:bg-gray-50 dark:odd:bg-gray-900"
                        >
                            <td className="border p-2">{container.id}</td>
                            <td className="border p-2">{container.name}</td>
                            <td className="border p-2">
                                <Link
                                    href={`/admin/containers/${container.id}`}
                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                >
                                    Open
                                </Link>
                                <Link
                                    href={`/admin/containers/${container.id}/edit`}
                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                >
                                    Edit
                                </Link>
                                <a
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                    onClick={() => handleDelete(container.id)}
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

export default ContainerList
