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

const ArticleForm: React.FC<ArticleFormProps> = ({ articleId, mode, onSuccessRedirect }) => {
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
            <Controller
                name="slug"
                control={control}
                render={({ field }) => <input {...field} placeholder="Slug" />}
            />
            {errors.slug && <p>{errors.slug.message}</p>}

            <Controller
                name="category"
                control={control}
                render={({ field }) => <input {...field} placeholder="Category" />}
            />
            {errors.category && <p>{errors.category.message}</p>}

            <Controller
                name="lang_id"
                control={control}
                render={({ field }) => (
                    <select {...field}>
                        {languages?.map((lang) => (
                            <option key={lang.id} value={lang.id}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                )}
            />
            {errors.lang_id && <p>{errors.lang_id.message}</p>}

            <Controller
                name="title"
                control={control}
                render={({ field }) => <input {...field} placeholder="Title" />}
            />
            {errors.title && <p>{errors.title.message}</p>}

            <Controller
                name="published_at"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type="datetime-local"
                        value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
                        onChange={(e) => field.onChange(e.target.value)}
                    />
                )}
            />
            {errors.published_at && <p>{errors.published_at.message}</p>}

            <Controller
                name="last_modified"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type="datetime-local"
                        value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
                        onChange={(e) => field.onChange(e.target.value)}
                    />
                )}
            />
            {errors.last_modified && <p>{errors.last_modified.message}</p>}

            <Controller
                name="author_name"
                control={control}
                render={({ field }) => <input {...field} placeholder="Author Name" />}
            />
            {errors.author_name && <p>{errors.author_name.message}</p>}

            <Controller
                name="excerpt"
                control={control}
                render={({ field }) => <textarea {...field} placeholder="Excerpt" />}
            />
            {errors.excerpt && <p>{errors.excerpt.message}</p>}

            <Controller
                name="image_url"
                control={control}
                render={({ field }) => <input {...field} placeholder="Image URL" />}
            />
            {errors.image_url && <p>{errors.image_url.message}</p>}

            <Controller
                name="image_alt"
                control={control}
                render={({ field }) => <input {...field} placeholder="Image Alt" />}
            />
            {errors.image_alt && <p>{errors.image_alt.message}</p>}

            <Controller
                name="content"
                control={control}
                render={({ field }) => <textarea {...field} placeholder="Content" />}
            />
            {errors.content && <p>{errors.content.message}</p>}

            <Controller
                name="article_container_id"
                control={control}
                render={({ field }) => (
                    <select {...field}>
                        {articleContainers?.map((container) => (
                            <option key={container.id} value={container.id}>
                                {container.name}
                            </option>
                        ))}
                    </select>
                )}
            />
            {errors.article_container_id && <p>{errors.article_container_id.message}</p>}

            <Controller
                name="clapCount"
                control={control}
                render={({ field }) => <input {...field} placeholder="Clap Count" readOnly />}
            />

            <Controller
                name="is_published"
                control={control}
                render={({ field }) => (
                    <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                    />
                )}
            />
        </form>
    )
}

export default ArticleForm
