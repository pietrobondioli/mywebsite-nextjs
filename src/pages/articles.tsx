import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps, NextPage } from "next"

import useTranslation from "@/hooks/useTranslation"
import { Articles as ArticlesSection } from "@/containers/Articles"
import getArticle from "@/lib/getArticle"
import getArticlesSlugs from "@/lib/getArticlesSlugs"

const pageInfo = {
    "pt-BR": {
        pageTitle: "Artigos - Pietro Bondioli",
        pageDescription:
            'Eu escrevo artigos sobre tecnologia - e as vezes sobre alguns "pensamentos esquecíveis".',
    },
    "en-US": {
        pageTitle: "Articles - Pietro Bondioli",
        pageDescription:
            'I write articles about technology - and sometimes about some "forgettable thoughts" of mine.',
    },
}

type ArticlesProps = {
    articles: ArticleMetadata[]
}

const Articles: NextPage<ArticlesProps> = (props) => {
    const { articles } = props
    const router = useRouter()
    const translate = useTranslation(pageInfo)

    return (
        <>
            <Head>
                <title>{translate("pageTitle")}</title>
                <meta name="description" content={translate("pageDescription")} />
                <meta property="og:title" content={translate("pageTitle")} />
                <meta property="og:description" content={translate("pageDescription")} />
                <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
                <meta name="twitter:title" content={translate("pageTitle")} />
                <meta name="twitter:description" content={translate("pageDescription")} />
            </Head>
            <main>
                <ArticlesSection articlesMetadata={articles} />
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps<{ articles: ArticleMetadata[] }> = async (context) => {
    const { locale } = context

    if (!locale) {
        return {
            props: {
                articles: [],
            },
        }
    }

    const articlesSlugs = await getArticlesSlugs([locale])

    const articles: ArticleMetadata[] = []

    await articlesSlugs[locale].forEach(async (slug) => {
        const { metadata } = await getArticle(locale, slug)
        articles.push(metadata)
    })

    return {
        props: {
            articles,
        },
    }
}

export default Articles
