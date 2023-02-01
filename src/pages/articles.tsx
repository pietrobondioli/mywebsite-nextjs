// React/Next Components
import Head from "next/head"
import { useRouter } from "next/router"

// Hooks
import useTranslation from "@/hooks/useTranslation"

// Components
import ArticlesSection from "@/containers/Articles"

// Lib
import getArticle from "@/lib/getArticle"
import getArticlesSlugs from "@/lib/getArticlesSlugs"

// Contents
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

function Articles({ articles }) {
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
                <ArticlesSection articles={articles} />
            </main>
        </>
    )
}

export async function getStaticProps(context) {
    const { locale } = context

    const articlesSlugs = await getArticlesSlugs([locale])

    const articles = []

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
