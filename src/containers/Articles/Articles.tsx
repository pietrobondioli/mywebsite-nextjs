import React from "react"
import { Article } from "@prisma/client"

import { Section } from "@/components/Section"
import { ArticlePreview } from "@/services/api"

import { ArticleCard } from "./ArticleCard"

type ArticlesProps = {
    articles: ArticlePreview[]
}

export const Articles: React.FC<ArticlesProps> = (props) => {
    const { articles } = props

    return (
        <Section>
            <div className="w-full h-full grid grid-cols-1 justify-evenly gap-8 justify-items-center py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
                {articles.map((article) => (
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
    )
}
