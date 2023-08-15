import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Article } from "@prisma/client"

import { Section } from "@/components/Section"
import { ArticleContainer } from "@/containers/Article"
import { fetchArticles } from "@/services/api"
import { markdownToHtml } from "@/utils/markdownToHtml"

export const getStaticProps: GetStaticProps<{ article: Article }, { slug: string }> = async (
    context
) => {
    const { locale, params } = context

    const translations = await serverSideTranslations(locale ?? ``, [`common`, `error`])

    const articles = await fetchArticles({ slug: params?.slug, lang: locale, preview: false })

    const article = articles[0]

    if (!article) {
        return {
            notFound: true,
        }
    }

    const htmlContent = await markdownToHtml(article?.content)

    article.content = htmlContent

    return {
        props: {
            article,
            ...translations,
        },
    }
}

// type LocaleSlug = {
//     params: {
//         slug: string
//     }
//     locale?: string
// }

// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async (context) => {
//     const { locales } = context

//     const slugs = getArticlesSlugs(locales || [])

//     const paths = locales?.reduce<LocaleSlug[]>((prev, locale) => {
//         const slugsOfLocales =
//             slugs[locale]?.map((slug) => {
//                 return { params: { slug }, locale }
//             }) ?? []

//         return [...prev, ...slugsOfLocales]
//     }, [])

//     return {
//         paths: paths || [],
//         fallback: false,
//     }
// }

type ArticleProps = {
    article: Article
}

const ArticlePage: NextPage<ArticleProps> = (props) => {
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
            </Section>
        </>
    )
}

export default ArticlePage
