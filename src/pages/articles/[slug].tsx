import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

import getArticle from "@/lib/getArticle"
import getArticlesSlugs from "@/lib/getArticlesSlugs"
import { Section } from "@/components/Section"
import styles from "@/styles/pages/Article/Article.module.scss"

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
                <meta name="twitter:site" content={metadata.twitterProfile} />
                <meta name="twitter:creator" content={metadata.twitterProfile} />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.excerpt} />
                <meta name="twitter:image" content={metadata.image} />
                <meta name="twitter:image:alt" content={metadata.imageAlt} />
            </Head>
            <Section>
                <img className={styles.article_img} src={metadata.image} alt={metadata.imageAlt} />
                <article
                    className={styles.article}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </Section>
        </>
    )
}

export const getStaticProps: GetStaticProps<{ article: Article }, { slug: string }> = async (
    context
) => {
    const { locale, params } = context

    if (!params?.slug || !locale) {
        return {
            notFound: true,
        }
    }

    const article = await getArticle(locale, params?.slug)

    return {
        props: {
            article,
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
    const { locales, defaultLocale } = context

    const slugs = await getArticlesSlugs(locales || [])

    const paths = locales?.reduce<LocaleSlug[]>((map, locale) => {
        let slugsOfDefaultLocale: LocaleSlug[] = []
        if (locale === defaultLocale) {
            slugsOfDefaultLocale = slugs[locale].map((slug) => {
                return { params: { slug } }
            })
        }
        const slugsOfLocales = slugs[locale].map((slug) => {
            return { params: { slug }, locale }
        })

        return [...map, ...slugsOfLocales, ...slugsOfDefaultLocale]
    }, [])

    return {
        paths: paths || [],
        fallback: false,
    }
}

export default Article
