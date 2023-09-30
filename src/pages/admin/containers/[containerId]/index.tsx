import { fetchArticles } from "@/services/api"
import { useRouter } from "next/router"
import useSWR from "swr"

const ContainerArticlesList = () => {
    const router = useRouter()
    const { containerId } = router.query
    const { data, error } = useSWR(
        containerId ? `container/${containerId}/articles` : null,
        fetchArticles
    )

    if (error) return <div>Error loading articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>Articles for Container: {containerId}</h1>
            <ul>
                {data.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ContainerArticlesList
