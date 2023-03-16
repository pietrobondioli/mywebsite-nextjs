import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Projects as ProjectsSection } from "@/containers/Projects"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale || ``, [`common`, `projects`])

    return {
        props: {
            ...translations,
        },
    }
}

const Projects: NextPage = () => {
    const router = useRouter()
    const { t } = useTranslation()

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
                <ProjectsSection />
            </main>
        </>
    )
}

export default Projects
