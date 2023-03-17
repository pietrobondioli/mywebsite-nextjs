import React from "react"
import Head from "next/head"
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { ErrorAlert } from "@/containers/ErrorAlert"

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
    const translations = await serverSideTranslations(locale || ``, [`common`, `error`])

    const statusCode = res ? res.statusCode : 404

    return {
        props: {
            ...translations,
            statusCode,
        },
    }
}

type ErrorProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Error: NextPage<ErrorProps> = (props) => {
    const { t } = useTranslation(`error`)
    const { statusCode } = props

    const title = t(`error_alert`) + statusCode

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <ErrorAlert statusCode={statusCode} />
        </>
    )
}

export default Error
