import React from "react"
import { useTranslation } from "next-i18next"

import styles from "./FormAlert.module.scss"

type FormAlertProps = {
    show: boolean
    status: boolean
}

export const FormAlert: React.FC<FormAlertProps> = (props) => {
    const { show, status } = props

    const { t } = useTranslation(`contact`)

    return (
        <div
            className={`${styles.formAlert} ${show && styles.formAlert_show} ${
                status ? styles.formAlert_success : styles.formAlert_error
            }`}
        >
            {status ? t(`form.alerts.success`) : t(`form.alerts.error`)}
        </div>
    )
}

export default FormAlert
