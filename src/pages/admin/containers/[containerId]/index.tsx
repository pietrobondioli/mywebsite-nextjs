import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { deleteArticle, fetchArticles } from "@/services/api"
import Link from "next/link"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import useSWR, { mutate } from "swr"

const ContainerArticlesList = () => {
    const router = useRouter()
    const { containerId } = router.query

    const { data, error } = useSWR(containerId, () => fetchArticles(String(containerId)))

    const handleDelete = async (id: string) => {
        try {
            await deleteArticle(id)
            mutate(`/api/containers/${containerId}/articles`)
            toast.success("Article deleted!")
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        }
    }

    if (error) return <div>Error loading articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <Section>
            <SectionTitle title="Articles" goBack={() => router.back()} />
            <div className="flex justify-end mb-4">
                <Link
                    href={`/admin/containers/${containerId}/articles/create`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center duration-150 h-min"
                >
                    Create Article
                </Link>
            </div>
            <table className="w-full border-collapse odd:bg-gray-100">
                <thead>
                    <tr className="bg-gray-300 dark:bg-gray-700">
                        <th className="border p-2 text-start">Title</th>
                        <th className="border p-2 text-start">Category</th>
                        <th className="border p-2 text-start">Language</th>
                        <th className="border p-2 text-start">Published At</th>
                        <th className="border p-2 text-start">Last Modified</th>
                        <th className="border p-2 text-start">Author</th>
                        <th className="border p-2 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((article) => (
                        <tr
                            key={article.id}
                            className="bg-gray-200 dark:bg-gray-800 odd:bg-gray-50 dark:odd:bg-gray-900"
                        >
                            <td className="border p-2">{article.title}</td>
                            <td className="border p-2">{article.category}</td>
                            <td className="border p-2">{article.lang.name}</td>
                            <td className="border p-2">
                                {article.published_at
                                    ? new Date(article.published_at).toLocaleDateString()
                                    : "-"}
                            </td>
                            <td className="border p-2">
                                {article.last_modified
                                    ? new Date(article.last_modified).toLocaleDateString()
                                    : "-"}
                            </td>
                            <td className="border p-2">{article.author_name}</td>
                            <td className="border p-2">
                                <Link
                                    href={`/admin/articles/${article.id}`}
                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                >
                                    Open
                                </Link>
                                <Link
                                    href={`/admin/articles/${article.id}/edit`}
                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                >
                                    Edit
                                </Link>
                                <a
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                    onClick={() => handleDelete(article.id)}
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

export default ContainerArticlesList
