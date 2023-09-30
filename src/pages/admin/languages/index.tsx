import { fetchLanguages } from "@/services/api"
import useSWR from "swr"

const LanguageList = () => {
    const { data, error } = useSWR("/api/languages", fetchLanguages)

    if (error) return <div>Error loading languages</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>Languages</h1>
            <ul>
                {data.map((language) => (
                    <li key={language.id}>
                        {language.name} ({language.code}) -{" "}
                        <a href={`/admin/languages/${language.id}/edit`}>Edit</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageList
