import React from "react"

import useTranslation from "@/hooks/useTranslation"

import styles from "./Error.module.scss"
import errorAlertContent from "./content"

export type ErrorAlertProps = {
    statusCode: number
}

export const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
    const translations = useTranslation(errorAlertContent)
    const { statusCode } = props

    return (
        <div className={styles.error}>
            <div className={styles.errorImage} />
            <div className={styles.errorCode}>{statusCode}</div>
            <div className={styles.errorMessage}>
                {statusCode ? translations("serverError") : translations("clientError")}
            </div>
        </div>
    )
}
