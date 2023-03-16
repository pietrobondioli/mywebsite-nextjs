import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { Button } from "@/components/Button"

import styles from "./ContactForm.module.scss"
import { FormAlert } from "./FormAlert"

type FormData = {
    name: string
    lastName: string
    subject: string
    email: string
    message: string
}

export const ContactForm: React.FC = () => {
    const { t } = useTranslation(`contact`)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: `onChange` })
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
            fetch(`/api/sendMail`, {
                method: `POST`,
                headers: {
                    "Content-Type": `application/json;charset=utf-8`,
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
            <SectionTitle title={t(`form.title`)} />
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles.form__group} ${styles.form__name}`}>
                    <label htmlFor="name">{t(`form.errors.name`)}</label>
                    <input id="name" type="text" {...register(`name`)} />
                    {errors.name && (
                        <div>
                            {errors.name?.type === `required` && (
                                <p>{t(`form.errors.name_error_required`)}</p>
                            )}
                            {errors.name?.type === `minLength` && (
                                <p>{t(`form.errors.name_error_length`)}</p>
                            )}
                            {errors.name?.type === `maxLength` && (
                                <p>{t(`form.errors.name_error_length`)}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__lastName}`}>
                    <label htmlFor="lastName">{t(`form.errors.lastName`)}</label>
                    <input id="lastName" type="text" {...register(`lastName`)} />
                    {errors.lastName && (
                        <div>
                            {errors.lastName?.type === `minLength` && (
                                <p>{t(`form.errors.lastName_error_length`)}</p>
                            )}
                            {errors.lastName?.type === `maxLength` && (
                                <p>{t(`form.errors.lastName_error_length`)}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__email}`}>
                    <label htmlFor="email">{t(`form.errors.email`)}</label>
                    <input id="email" type="text" {...register(`email`)} />
                    {errors.email && (
                        <div>
                            {errors.email?.type === `required` && (
                                <p>{t(`form.errors.email_error_required`)}</p>
                            )}
                            {errors.email?.type === `pattern` && (
                                <p>{t(`form.errors.email_error_pattern`)}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__subject}`}>
                    <label htmlFor="subject">{t(`form.errors.subject`)}</label>
                    <input id="subject" type="text" {...register(`subject`)} />
                    {errors.subject && (
                        <div>
                            {errors.subject?.type === `required` && (
                                <p>{t(`form.errors.subject_error_required`)}</p>
                            )}
                            {errors.subject?.type === `minLength` && (
                                <p>{t(`form.errors.subject_error_length`)}</p>
                            )}
                            {errors.subject?.type === `maxLength` && (
                                <p>{t(`form.errors.subject_error_length`)}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__text}`}>
                    <label htmlFor="message">{t(`form.errors.message`)}</label>
                    <textarea
                        className={styles.input}
                        id="message"
                        spellCheck="true"
                        {...register(`message`)}
                    />
                    {errors.message && (
                        <div>
                            {errors.message?.type === `required` && (
                                <p>{t(`form.errors.message_error_required`)}</p>
                            )}
                            {errors.message?.type === `minLength` && (
                                <p>{t(`form.errors.message_error_length`)}</p>
                            )}
                            {errors.message?.type === `maxLength` && (
                                <p>{t(`form.errors.message_error_length`)}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${styles.form__group} ${styles.form__button}`}>
                    <Button name="submit" id="submit" type="submit" value={t(`form.button`)} />
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
