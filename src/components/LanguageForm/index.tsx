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
            <Controller
                name="code"
                control={control}
                render={({ field }) => <input {...field} placeholder="Code" />}
            />
            {errors.code && <p>{errors.code.message}</p>}

            <Controller
                name="name"
                control={control}
                render={({ field }) => <input {...field} placeholder="Name" />}
            />
            {errors.name && <p>{errors.name.message}</p>}

            <button type="submit">{mode === "create" ? "Create" : "Update"} Language</button>
        </form>
    )
}

export default LanguageForm
