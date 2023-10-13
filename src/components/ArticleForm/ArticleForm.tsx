import {
    createArticle,
    fetchArticleById,
    fetchArticleContainers,
    fetchLanguages,
    updateArticle,
} from "@/services/api"
import { ArticleSchemaType, articleSchema } from "@/utils/schemas/article-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArticleContainer, Language } from "@prisma/client"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import useSWR from "swr"
import { Loading } from "../Loading"

type ArticleFormProps = {
    articleId?: string
    mode: "create" | "edit"
    onSuccessRedirect: () => void
}

export const ArticleForm: React.FC<ArticleFormProps> = ({ articleId, mode, onSuccessRedirect }) => {
    const articleToEditKey = articleId ? `articles/${articleId}` : null

    const {
        data: article,
        error,
        isLoading,
    } = useSWR<ArticleSchemaType>(
        articleToEditKey,
        articleId && mode === "edit" ? () => fetchArticleById(articleId) : null
    )

    const { data: articleContainers } = useSWR<ArticleContainer[]>(
        "article-containers",
        fetchArticleContainers
    )
    const { data: languages } = useSWR<Language[]>("languages", fetchLanguages)

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<ArticleSchemaType>({
        resolver: zodResolver(articleSchema),
        defaultValues: article,
    })

    useEffect(() => {
        if (article && mode === "edit") {
            for (const key in article) {
                setValue(key as keyof ArticleSchemaType, article[key as keyof ArticleSchemaType])
            }
        }
    }, [article])

    const onSubmit = async (data: ArticleSchemaType) => {
        try {
            if (mode === "create") {
                await createArticle(data)
                toast.success("Article created!")
            } else {
                await updateArticle(articleId!, data)
                toast.success("Article updated!")
            }
            onSuccessRedirect()
        } catch (err) {
            console.error("Error in article form submit:", err)
            toast.error("Error creating article")
        }
    }

    if (isLoading || isSubmitting) return <Loading />
    if (error) {
        toast.error("Error fetching article")
        return null
    }
    if (mode === "edit" && !article) {
        toast.error("Article not found")
        return null
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="slug" className="block text-gray-700 font-bold mb-2">
                    Slug
                </label>
                <Controller
                    name="slug"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="slug"
                            placeholder="Slug"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.slug && (
                    <p className="text-red-500 text-xs italic">{errors.slug.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                    Category
                </label>
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="category"
                            placeholder="Category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.category && (
                    <p className="text-red-500 text-xs italic">{errors.category.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="lang_id" className="block text-gray-700 font-bold mb-2">
                    Language
                </label>
                <Controller
                    name="lang_id"
                    control={control}
                    render={({ field }) => (
                        <select
                            {...field}
                            id="lang_id"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {languages?.map((lang) => (
                                <option key={lang.id} value={lang.id}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                />
                {errors.lang_id && (
                    <p className="text-red-500 text-xs italic">{errors.lang_id.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                    Title
                </label>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="title"
                            placeholder="Title"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.title && (
                    <p className="text-red-500 text-xs italic">{errors.title.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="published_at" className="block text-gray-700 font-bold mb-2">
                    Published At
                </label>
                <Controller
                    name="published_at"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="datetime-local"
                            id="published_at"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={
                                field.value ? new Date(field.value).toISOString().slice(0, 16) : ""
                            }
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />
                {errors.published_at && (
                    <p className="text-red-500 text-xs italic">{errors.published_at.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="last_modified" className="block text-gray-700 font-bold mb-2">
                    Last Modified
                </label>
                <Controller
                    name="last_modified"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="datetime-local"
                            id="last_modified"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={
                                field.value ? new Date(field.value).toISOString().slice(0, 16) : ""
                            }
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />
                {errors.last_modified && (
                    <p className="text-red-500 text-xs italic">{errors.last_modified.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="author_name" className="block text-gray-700 font-bold mb-2">
                    Author Name
                </label>
                <Controller
                    name="author_name"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="author_name"
                            placeholder="Author Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.author_name && (
                    <p className="text-red-500 text-xs italic">{errors.author_name.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="excerpt" className="block text-gray-700 font-bold mb-2">
                    Excerpt
                </label>
                <Controller
                    name="excerpt"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            id="excerpt"
                            placeholder="Excerpt"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.excerpt && (
                    <p className="text-red-500 text-xs italic">{errors.excerpt.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="image_url" className="block text-gray-700 font-bold mb-2">
                    Image URL
                </label>
                <Controller
                    name="image_url"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="image_url"
                            placeholder="Image URL"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.image_url && (
                    <p className="text-red-500 text-xs italic">{errors.image_url.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="image_alt" className="block text-gray-700 font-bold mb-2">
                    Image Alt
                </label>
                <Controller
                    name="image_alt"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="image_alt"
                            placeholder="Image Alt"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.image_alt && (
                    <p className="text-red-500 text-xs italic">{errors.image_alt.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
                    Content
                </label>
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            id="content"
                            placeholder="Content"
                            rows={30}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.content && (
                    <p className="text-red-500 text-xs italic">{errors.content.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="article_container_id"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Article Container
                </label>
                <Controller
                    name="article_container_id"
                    control={control}
                    render={({ field }) => (
                        <select
                            {...field}
                            id="article_container_id"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {articleContainers?.map((container) => (
                                <option key={container.id} value={container.id}>
                                    {container.name}
                                </option>
                            ))}
                        </select>
                    )}
                />
                {errors.article_container_id && (
                    <p className="text-red-500 text-xs italic">
                        {errors.article_container_id.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="clapCount" className="block text-gray-700 font-bold mb-2">
                    Clap Count
                </label>
                <Controller
                    name="clapCount"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="clapCount"
                            placeholder="Clap Count"
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="is_published" className="block text-gray-700 font-bold mb-2">
                    Published
                </label>
                <Controller
                    name="is_published"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="checkbox"
                            onChange={(e) => field.onChange(e.target.checked)}
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={field.value}
                            value={field.value ? "true" : "false"}
                        />
                    )}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-150"
                >
                    {mode === "create" ? "Create" : "Update"} Article
                </button>
            </div>
        </form>
    )
}
