import React from "react"
import Head from "next/head"
import { NextPage } from "next"

import { ErrorAlert } from "@/containers/ErrorAlert"
import useTranslation from "@/hooks/useTranslation"

const errorContent = {
    "pt-BR": {
        pageTitle: "Erro",
    },
    "en-US": {
        pageTitle: "Error",
    },
}

type ErrorProps = {
    statusCode: number
}

const Error: NextPage<ErrorProps> = (props) => {
    const translate = useTranslation(errorContent)
    const { statusCode } = props

    return (
        <>
            <Head>
                <title>
                    {translate("pageTitle")} {statusCode}
                </title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <ErrorAlert statusCode={statusCode} />
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return { statusCode } as ErrorProps
}

export default Error
