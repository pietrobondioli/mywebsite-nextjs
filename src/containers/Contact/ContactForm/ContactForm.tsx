import React, { useState } from "react"
import { useForm } from "react-hook-form"

import useTranslation from "@/hooks/useTranslation"
import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"

import styles from "./ContactForm.module.scss"
import { FormAlert } from "./FormAlert"
import contactFormContent from "./content"

const sectionContent = {
    "pt-BR": {
        title: "contate-me",
    },
    "en-US": {
        title: "contact me",
    },
}

type FormData = {
    name: string
    lastName: string
    subject: string
    email: string
    message: string
}

export const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: "onChange" })
    const translate = useTranslation(contactFormContent)
    const [submitStatus, setSubmitStatus] = useState(false)
    const [alreadySubmitted, setAlreadySubmitted] = useState(false)
    const [submitVisibility, setSubmitVisibility] = useState(false)

    const handleSubmitStatus = (status: boolean) => {
        setSubmitStatus(status)
        setSubmitVisibility(true)
        setAlreadySubmitted(false)
        reset()
        setTimeout(() => {
            setSubmitVisibility(false)
        }, 2000)
    }

    const onSubmit = (formData: FormData) => {
        if (!alreadySubmitted) {
            setAlreadySubmitted(true)
            fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    handleSubmitStatus(response.ok)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }

    return (
        <Section>
            <SectionTitle title={translate("title", sectionContent)} />
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles.form__group} ${styles.form__name}`}>
                    <label htmlFor="name">{translate("name")}</label>
                    <input id="name" type="text" {...register("name")} />
                    {errors.name && (
                        <div>
                            {errors.name?.type === "required" && (
                                <p>{translate("name_error_required")}</p>
                            )}
                            {errors.name?.type === "minLength" && (
                                <p>{translate("name_error_length")}</p>
                            )}
                            {errors.name?.type === "maxLength" && (
                                <p>{translate("name_error_length")}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__lastName}`}>
                    <label htmlFor="lastName">{translate("lastName")}</label>
                    <input id="lastName" type="text" {...register("lastName")} />
                    {errors.lastName && (
                        <div>
                            {errors.lastName?.type === "minLength" && (
                                <p>{translate("lastName_error_length")}</p>
                            )}
                            {errors.lastName?.type === "maxLength" && (
                                <p>{translate("lastName_error_length")}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__email}`}>
                    <label htmlFor="email">{translate("email")}</label>
                    <input id="email" type="text" {...register("email")} />
                    {errors.email && (
                        <div>
                            {errors.email?.type === "required" && (
                                <p>{translate("email_error_required")}</p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p>{translate("email_error_pattern")}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__subject}`}>
                    <label htmlFor="subject">{translate("subject")}</label>
                    <input id="subject" type="text" {...register("subject")} />
                    {errors.subject && (
                        <div>
                            {errors.subject?.type === "required" && (
                                <p>{translate("subject_error_required")}</p>
                            )}
                            {errors.subject?.type === "minLength" && (
                                <p>{translate("subject_error_length")}</p>
                            )}
                            {errors.subject?.type === "maxLength" && (
                                <p>{translate("subject_error_length")}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__text}`}>
                    <label htmlFor="message">{translate("message")}</label>
                    <textarea
                        className={styles.input}
                        id="message"
                        spellCheck="true"
                        {...register("message")}
                    />
                    {errors.message && (
                        <div>
                            {errors.message?.type === "required" && (
                                <p>{translate("message_error_required")}</p>
                            )}
                            {errors.message?.type === "minLength" && (
                                <p>{translate("message_error_length")}</p>
                            )}
                            {errors.message?.type === "maxLength" && (
                                <p>{translate("message_error_length")}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__button}`}>
                    <input
                        className={`button ${styles.input}`}
                        name="submit"
                        id="submit"
                        type="submit"
                        value={translate("button")}
                    />
                </div>
            </form>
            {submitStatus ? (
                <FormAlert show={submitVisibility} status={true} />
            ) : (
                <FormAlert show={submitVisibility} status={false} />
            )}
        </Section>
    )
}
