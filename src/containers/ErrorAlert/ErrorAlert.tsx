import React from "react"
import { useTranslation } from "next-i18next"
import { AiOutlineWarning } from "react-icons/ai"

import { Section } from "@/components/Section"

export type ErrorAlertProps = {
    statusCode: number
}

export const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
    const { t } = useTranslation(`error`)
    const { statusCode } = props

    return (
        <Section stretchToViewportHeight>
            <div className="flex flex-col h-full items-center justify-center">
                <AiOutlineWarning className="w-32 h-32 self-center text-orange" />
                <div className="text-3xl">{statusCode}</div>
                <div>
                    {statusCode ? t(`error_alert.server_error`) : t(`error_alert.client_error`)}
                </div>
            </div>
        </Section>
    )
}
