import React from "react"
import Head from "next/head"
import { GetStaticProps, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Header } from "@/containers/HomePage/Header"
import { Presentation } from "@/containers/HomePage/Presentation"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale || ``, [`common`, `home`])

    return {
        props: {
            ...translations,
        },
    }
}

const HomePage: NextPage = () => {
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title>Pietro Bondioli</title>
                <meta name="description" content={t(`pageDescription`)} />
            </Head>
            <main>
                <Header />
                <Presentation />
            </main>
        </>
    )
}

export default HomePage
