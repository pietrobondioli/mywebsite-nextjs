import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { fetchArticleById } from "@/services/api"
import { Article } from "@prisma/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useSWR from "swr"

const ArticleForm = () => {
    const router = useRouter()
    const { articleId } = router.query

    const { data: article, error } = useSWR<Article>(articleId, fetchArticleById)

    useEffect(() => {
        if (error) {
            router.push("/404")
        }
    }, [error, router])

    if (error) {
        return <div>Error loading article</div>
    }

    if (!article) {
        return <div>Loading...</div>
    }

    return (
        <Section>
            <SectionTitle title="Article" goBack={() => router.back()} />
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block font-bold text-gray-700 mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={article.title}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block font-bold text-gray-700 mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        defaultValue={article.content}
                        rows={30}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="image_url" className="block font-bold text-gray-700 mb-2">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image_url"
                        name="image_url"
                        defaultValue={article.image_url}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="image_alt" className="block font-bold text-gray-700 mb-2">
                        Image Alt
                    </label>
                    <input
                        type="text"
                        id="image_alt"
                        name="image_alt"
                        defaultValue={article.image_alt}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block font-bold text-gray-700 mb-2">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        defaultValue={article.category}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="lang_id" className="block font-bold text-gray-700 mb-2">
                        Language
                    </label>
                    <input
                        type="text"
                        id="lang_id"
                        name="lang_id"
                        defaultValue={article.lang_id}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="published_at" className="block font-bold text-gray-700 mb-2">
                        Published At
                    </label>
                    <input
                        type="text"
                        id="published_at"
                        name="published_at"
                        defaultValue={article.published_at.toString()}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="last_modified" className="block font-bold text-gray-700 mb-2">
                        Last Modified
                    </label>
                    <input
                        type="text"
                        id="last_modified"
                        name="last_modified"
                        defaultValue={article.last_modified.toString()}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="author_name" className="block font-bold text-gray-700 mb-2">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author_name"
                        name="author_name"
                        defaultValue={article.author_name}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </form>
        </Section>
    )
}

export default ArticleForm
