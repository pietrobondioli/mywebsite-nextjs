import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { getArticle } from "@/utils/getArticle"
import { getArticlesSlugs } from "@/utils/getArticlesSlugs"
import { Section } from "@/components/Section"
import { Article as ArticleContainer } from "@/containers/Article"

export const getStaticProps: GetStaticProps<{ article: Article }, { slug: string }> = async (
    context
) => {
    const { locale, params } = context

    const translations = await serverSideTranslations(locale || ``, [`common`, `error`])

    if (!params?.slug || !locale) {
        return {
            notFound: true,
        }
    }

    const article = getArticle(locale, params?.slug)

    return {
        props: {
            article,
            ...translations,
        },
    }
}

type LocaleSlug = {
    params: {
        slug: string
    }
    locale?: string
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async (context) => {
    const { locales } = context

    const slugs = getArticlesSlugs(locales || [])

    const paths = locales?.reduce<LocaleSlug[]>((prev, locale) => {
        const slugsOfLocales =
            slugs[locale]?.map((slug) => {
                return { params: { slug }, locale }
            }) ?? []

        return [...prev, ...slugsOfLocales]
    }, [])

    return {
        paths: paths || [],
        fallback: false,
    }
}

type ArticleProps = {
    article: Article
}

const Article: NextPage<ArticleProps> = (props) => {
    const { article } = props
    const { metadata } = article
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.excerpt} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content={metadata.excerpt} />
                <meta property="og:image" itemProp="image" content={metadata.image} />
                <meta property="og:image:alt" content={metadata.imageAlt} />
                <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
                <meta property="og:site_name" content="Pietro Bondioli" />
                <meta property="article:author" content="Pietro Bondioli" />
                <meta property="article:section" content="Technology" />
                <meta property="article:published_time" content={metadata.published} />
                <meta property="article:modified_time" content={metadata.lastModified} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.excerpt} />
                <meta name="twitter:image" content={metadata.image} />
                <meta name="twitter:image:alt" content={metadata.imageAlt} />
            </Head>
            <Section>
                <ArticleContainer article={article} />
            </Section>
        </>
    )
}

export default Article
