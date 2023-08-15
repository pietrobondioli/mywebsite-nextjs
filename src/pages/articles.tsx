import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Article } from "@prisma/client"

import { Articles } from "@/containers/Articles"
import { fetchArticles } from "@/services/api"

export const getStaticProps: GetStaticProps<{ articles: Omit<Article, "content">[] }> = async (
    context
) => {
    const { locale } = context

    if (!locale) {
        return {
            props: {
                articles: [],
            },
        }
    }

    const articles = await fetchArticles(locale)

    const translations = await serverSideTranslations(locale || ``, [`common`, `articles`])

    return {
        props: {
            articles,
            ...translations,
        },
    }
}

const ArticlesPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    const { articles } = props
    const router = useRouter()
    const { t } = useTranslation(`articles`)

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
                <Articles articlesMetadata={articles} />
            </main>
        </>
    )
}

export default ArticlesPage
