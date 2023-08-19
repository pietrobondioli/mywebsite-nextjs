import React from "react"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { ArticlesByCategory } from "@/server/lib/getArticles"

import { ArticleCard } from "./ArticleCard"

type ArticlesProps = {
    articles: ArticlesByCategory
}

export const Articles: React.FC<ArticlesProps> = (props) => {
    const { articles } = props

    return (
        <>
            {Object.keys(articles).map((category) => (
                <Section key={category}>
                    <SectionTitle title={category} />
                    <div className="w-full h-full grid grid-cols-1 justify-evenly gap-8 justify-items-center py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
                        {articles[category]?.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                articleSlug={article.slug || ``}
                                articleImage={article.image_url || ``}
                                articleImageAlt={article.image_alt || ``}
                                articleTitle={article.title || ``}
                                articleAuthor={article.author_name || ``}
                                articleDate={new Date(article.published_at).toLocaleDateString()}
                            />
                        ))}
                    </div>
                </Section>
            ))}
        </>
    )
}
