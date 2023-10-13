import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

import { Education } from "@/containers/About/Education"
import { Experience } from "@/containers/About/Experience"
import { Skills } from "@/containers/About/Skills"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale || `en`, [`common`, `about`])

    return {
        props: {
            ...translations,
        },
    }
}

const AboutPage: React.FC = () => {
    const router = useRouter()
    const { t } = useTranslation(`about`)

    return (
        <>
            <Head>
                <title>{t(`pageTitle`)}</title>
                <meta name="description" content={t(`pageDescription`)} />
                <meta property="og:title" content={t(`pageTitle`)} />
                <meta property="og:description" content={t(`pageDescription`)} />
                <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
                <meta name="twitter:title" content={t(`pageTitle`)} />
                <meta name="twitter:description" content={t(`pageDescription`)} />
            </Head>
            <main>
                <Experience />
                <Skills />
                <Education />
            </main>
        </>
    )
}

export default AboutPage
