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
                    <div className="w-full flex gap-8 justify-around flex-wrap">
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
