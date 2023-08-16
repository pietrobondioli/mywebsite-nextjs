import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Articles } from "@/containers/Articles"
import { fetchArticles } from "@/services/api"
import { ArticlesByCategory, reduceArticlesByCategory } from "@/utils/reduceArticlesByCategory"

export const getStaticProps: GetStaticProps<{ articles: ArticlesByCategory }> = async (context) => {
    const { locale } = context

    if (!locale) {
        return {
            props: {
                articles: {},
            },
        }
    }

    const articles = await fetchArticles({ lang: locale, preview: true })

    const articlesByCategory = reduceArticlesByCategory(articles)

    const translations = await serverSideTranslations(locale || ``, [`common`, `articles`])

    return {
        props: {
            articles: articlesByCategory,
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
                <Articles articles={articles} />
            </main>
        </>
    )
}

export default ArticlesPage
