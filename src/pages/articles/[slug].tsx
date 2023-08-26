import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Article } from "@prisma/client"

import { Section } from "@/components/Section"
import { ArticleContainer } from "@/containers/Article"
import { markdownToHtml } from "@/utils/markdownToHtml"
import CommentsContainer from "@/components/Comments"
import { ArticlePreview, getArticles } from "@/server/lib/getArticles"
import Claps from "@/components/Claps"

export const getStaticProps: GetStaticProps<{ article: Article }, { slug: string }> = async (
    context
) => {
    const { locale, params } = context

    const translations = await serverSideTranslations(locale ?? ``, [`common`, `error`])

    let article: Article | undefined = undefined

    try {
        const articles = await getArticles({ slug: params?.slug, lang: locale, preview: false })

        article = articles[0]
    } catch (error) {
        console.error(error)
    }

    if (!article) {
        return {
            notFound: true,
        }
    }

    const htmlContent = await markdownToHtml(article?.content)

    article.content = htmlContent

    return {
        props: {
            article: JSON.parse(JSON.stringify(article)),
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

    if (!locales) {
        return {
            paths: [],
            fallback: false,
        }
    }

    let paths: LocaleSlug[] = []

    for (const locale of locales) {
        let articles: ArticlePreview[] = []
        try {
            articles = await getArticles({ lang: locale, preview: true })
        } catch (error) {
            console.error(error)
        }

        const localePaths: LocaleSlug[] = articles.map((article) => ({
            params: { slug: article.slug },
            locale: locale,
        }))

        paths = [...paths, ...localePaths]
    }

    return {
        paths: paths,
        fallback: false,
    }
}

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    const { article } = props
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.excerpt} />
                <meta property="og:title" content={article.title} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" itemProp="image" content={article.image_alt} />
                <meta property="og:image:alt" content={article.image_alt} />
                <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
                <meta property="og:site_name" content="Pietro Bondioli" />
                <meta property="article:author" content="Pietro Bondioli" />
                <meta property="article:section" content="Technology" />
                <meta
                    property="article:published_time"
                    content={new Date(article.published_at).toLocaleDateString()}
                />
                <meta
                    property="article:modified_time"
                    content={new Date(article.last_modified).toLocaleDateString()}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article.title} />
                <meta name="twitter:description" content={article.excerpt} />
                <meta name="twitter:image" content={article.image_url} />
                <meta name="twitter:image:alt" content={article.image_alt} />
            </Head>
            <Section>
                <ArticleContainer article={article} />
                <Claps articleId={article.id} />
                <CommentsContainer articleId={article.id} />
            </Section>
        </>
    )
}

export default ArticlePage
