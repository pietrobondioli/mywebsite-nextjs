import { createLanguage, fetchLanguageById, updateLanguage } from "@/services/api"
import {
    CreateLanguageSchemaType,
    UpdateLanguageSchemaType,
    createLanguageSchema,
} from "@/utils/schemas/language-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import useSWR from "swr"
import { Loading } from "../Loading"

type LanguageFormProps = {
    languageId?: string
    mode: "create" | "edit"
    onSuccessRedirect: () => void
}

const LanguageForm: React.FC<LanguageFormProps> = ({ languageId, mode, onSuccessRedirect }) => {
    const languageToEditKey = languageId ? `languages/${languageId}` : null

    const {
        data: language,
        error,
        isLoading,
    } = useSWR<CreateLanguageSchemaType>(
        languageToEditKey,
        languageId && mode === "edit" ? () => fetchLanguageById(languageId) : null
    )

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<CreateLanguageSchemaType>({
        resolver: zodResolver(createLanguageSchema),
        defaultValues: language,
    })

    useEffect(() => {
        if (language && mode === "edit") {
            for (const key in language) {
                setValue(
                    key as keyof CreateLanguageSchemaType,
                    language[key as keyof CreateLanguageSchemaType]
                )
            }
        }
    }, [language])

    const onSubmit = async (data: CreateLanguageSchemaType | UpdateLanguageSchemaType) => {
        try {
            if (mode === "create") {
                await createLanguage(data as CreateLanguageSchemaType)
                toast.success("Language created!")
            } else {
                await updateLanguage(languageId!, data as UpdateLanguageSchemaType)
                toast.success("Language updated!")
            }
            onSuccessRedirect()
        } catch (err) {
            console.error("Error in language form submit:", err)
            toast.error("Error creating or updating language")
        }
    }

    if (isLoading || isSubmitting) return <Loading />
    if (error) {
        toast.error("Error fetching language")
        return null
    }
    if (mode === "edit" && !language) {
        toast.error("Language not found")
        return null
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label
                    htmlFor="code"
                    className="block text-gray-700 font-bold mb-2 dark:text-gray-100"
                >
                    Code
                </label>
                <Controller
                    name="code"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="code"
                            placeholder="Code"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-gray-100"
                        />
                    )}
                />
                {errors.code && (
                    <p className="text-red-500 text-xs italic">{errors.code.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2 dark:text-gray-100"
                >
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-gray-100"
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
                    {mode === "create" ? "Create" : "Update"} Language
                </button>
            </div>
        </form>
    )
}

export default LanguageForm
