import React from "react"

import useTranslation from "@/hooks/useTranslation"
import styles from "@/styles/pages/Contact/FormAlert.module.scss"

import formAlertContent from "./content"

type FormAlertProps = {
    show: boolean
    status: boolean
}

export const FormAlert: React.FC<FormAlertProps> = (props) => {
    const translate = useTranslation(formAlertContent)
    const { show, status } = props

    return (
        <div
            className={`${styles.formAlert} ${show && styles.formAlert_show} ${
                status ? styles.formAlert_success : styles.formAlert_error
            }`}
        >
            {status ? translate("success") : translate("error")}
        </div>
    )
}

export default FormAlert
