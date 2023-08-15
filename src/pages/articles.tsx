import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Articles as ArticlesSection } from "@/containers/Articles"
import { getArticle } from "@/utils/getArticle"
import { getArticlesSlugs } from "@/utils/getArticlesSlugs"

export const getStaticProps: GetStaticProps<{ articles: ArticleMetadata[] }> = async (context) => {
    const { locale } = context

    if (!locale) {
        return {
            props: {
                articles: [],
            },
        }
    }

    const articlesSlugs = getArticlesSlugs([locale])

    const articles: ArticleMetadata[] = []

    articlesSlugs[locale]?.forEach((slug) => {
        const { metadata } = getArticle(locale, slug)
        articles.push(metadata)
    })

    const translations = await serverSideTranslations(locale || ``, [`common`, `articles`])

    return {
        props: {
            articles,
            ...translations,
        },
    }
}

type ArticlesProps = {
    articles: ArticleMetadata[]
}

const Articles: NextPage<ArticlesProps> = (props) => {
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
                <ArticlesSection articlesMetadata={articles} />
            </main>
        </>
    )
}

export default Articles
