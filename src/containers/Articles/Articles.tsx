import React from "react"

import { Section } from "@/components/Section"

import { ArticleCard } from "./ArticleCard"

type ArticlesProps = {
    articlesMetadata: ArticleMetadata[]
}

export const Articles: React.FC<ArticlesProps> = (props) => {
    const { articlesMetadata } = props

    return (
        <Section>
            <div className="w-full h-full grid grid-cols-1 justify-evenly gap-8 justify-items-center py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {articlesMetadata.map((article) => (
                    <ArticleCard
                        key={article.slug}
                        articleSlug={article.slug || ``}
                        articleImage={article.image || ``}
                        articleImageAlt={article.imageAlt || ``}
                        articleTitle={article.title || ``}
                        articleAuthor={article.author || ``}
                        articleDate={article.publishedHumanReadable || ``}
                    />
                ))}
            </div>
        </Section>
    )
}
