import { Article } from "@prisma/client"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"

import Claps from "@/components/Claps"
import CommentsContainer from "@/components/Comments"
import { Section } from "@/components/Section"
import { ArticleContainer } from "@/containers/Article"
import { ArticlePreview, getArticles } from "@/server/lib/getArticles"
import { markdownToHtml } from "@/utils/markdownToHtml"
import { useRouter } from "next/router"
import { OpenGraphData } from "../_app"

export const getStaticProps: GetStaticProps<{ article: Article }, { slug: string }> = async (
    context
) => {
    const { locale, params } = context

    const translations = await serverSideTranslations(locale ?? `en`, [`common`, `error`])

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

    const openGraphData: OpenGraphData[] = [
        { name: "description", content: article.excerpt, key: "description" },
        { property: "og:title", content: article.title, key: "og:title" },
        { property: "og:type", content: "article", key: "og:type" },
        { property: "og:description", content: article.excerpt, key: "og:description" },
        { property: "og:image", content: article.image_url, key: "og:image" },
        { property: "og:image:alt", content: article.image_alt, key: "og:image:alt" },
        {
            property: "og:url",
            content: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${context.params?.slug}`,
            key: "og:url",
        },
        { property: "article:author", content: "Pietro Bondioli", key: "article:author" },
        { property: "article:section", content: article.category, key: "article:section" },
        {
            property: "article:published_time",
            content: new Date(article.published_at).toLocaleDateString(),
            key: "article:published_time",
        },
        {
            property: "article:modified_time",
            content: new Date(article.last_modified).toLocaleDateString(),
            key: "article:modified_time",
        },
        { name: "twitter:card", content: "summary_large_image", key: "twitter:card" },
        { name: "twitter:title", content: article.title, key: "twitter:title" },
        { name: "twitter:description", content: article.excerpt, key: "twitter:description" },
        { name: "twitter:image", content: article.image_url, key: "twitter:image" },
        { name: "twitter:image:alt", content: article.image_alt, key: "twitter:image:alt" },
    ]

    return {
        props: {
            article: JSON.parse(JSON.stringify(article)),
            ...translations,
            openGraphData,
        },
        revalidate: 60,
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
        } catch (error) {}

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

    if (!article.is_published) {
        router.push("/")
        return null
    }

    return (
        <>
            <Head>
                <title>{article.title}</title>
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
