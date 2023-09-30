import { fetchArticleContainers } from "@/services/api"
import useSWR from "swr"

const ContainerList = () => {
    const { data, error } = useSWR("article-containers", fetchArticleContainers)

    if (error) return <div>Error loading containers</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>Article Containers</h1>
            <ul>
                {data.map((container) => (
                    <li key={container.id}>
                        {container.name} - <a href={`/admin/containers/${container.id}`}>Edit</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContainerList
