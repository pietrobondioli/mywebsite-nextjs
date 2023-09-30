import {
    createArticleContainer,
    fetchArticleContainerById,
    updateArticleContainer,
} from "@/services/api"
import {
    CreateArticleContainerSchemaType,
    UpdateArticleContainerSchemaType,
    createArticleContainerSchema,
    updateArticleContainerSchema,
} from "@/utils/schemas/article-container-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import useSWR from "swr"
import { Loading } from "../Loading"

type ContainerFormProps = {
    containerId?: string
    mode: "create" | "edit"
    onSuccessRedirect: () => void
}

const ContainerForm: React.FC<ContainerFormProps> = ({ containerId, mode, onSuccessRedirect }) => {
    const containerToEditKey = containerId ? `containers/${containerId}` : null

    const {
        data: container,
        error,
        isLoading,
    } = useSWR<CreateArticleContainerSchemaType>(
        containerToEditKey,
        containerId && mode === "edit" ? () => fetchArticleContainerById(containerId) : null
    )

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<CreateArticleContainerSchemaType | UpdateArticleContainerSchemaType>({
        resolver: zodResolver(
            mode === "create" ? createArticleContainerSchema : updateArticleContainerSchema
        ),
        defaultValues: container,
    })

    useEffect(() => {
        if (container && mode === "edit") {
            for (const key in container) {
                setValue(
                    key as keyof CreateArticleContainerSchemaType,
                    container[key as keyof CreateArticleContainerSchemaType]
                )
            }
        }
    }, [container])

    const onSubmit = async (
        data: CreateArticleContainerSchemaType | UpdateArticleContainerSchemaType
    ) => {
        try {
            if (mode === "create") {
                await createArticleContainer(data as CreateArticleContainerSchemaType)
                toast.success("Container created!")
            } else {
                await updateArticleContainer(containerId!, data as UpdateArticleContainerSchemaType)
                toast.success("Container updated!")
            }
            onSuccessRedirect()
        } catch (err) {
            console.error("Error in container form submit:", err)
            toast.error("Error creating/updating container")
        }
    }

    if (isLoading || isSubmitting) return <Loading />
    if (error) {
        toast.error("Error fetching container")
        return null
    }
    if (mode === "edit" && !container) {
        toast.error("Container not found")
        return null
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                </label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                />
                {errors.name && (
                    <p className="text-red-500 text-xs italic">{errors.name.message}</p>
                )}
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-150"
                >
                    {mode === "create" ? "Create" : "Update"} Container
                </button>
            </div>
        </form>
    )
}

export default ContainerForm
