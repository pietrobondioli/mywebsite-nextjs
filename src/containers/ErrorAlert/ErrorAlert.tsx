import React from "react"
import { useTranslation } from "next-i18next"

import styles from "./Error.module.scss"

export type ErrorAlertProps = {
    statusCode: number
}

export const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
    const { t } = useTranslation(`error`)
    const { statusCode } = props

    return (
        <div className={styles.error}>
            <div className={styles.errorImage} />
            <div className={styles.errorCode}>{statusCode}</div>
            <div className={styles.errorMessage}>
                {statusCode ? t(`error_alert.server_error`) : t(`error_alert.client_error`)}
            </div>
        </div>
    )
}
