import React from "react"

import { Section } from "@/components/Section"

import styles from "./Articles.module.scss"
import { ArticleCard } from "./ArticleCard"

type ArticlesProps = {
    articlesMetadata: ArticleMetadata[]
}

export const Articles: React.FC<ArticlesProps> = (props) => {
    const { articlesMetadata } = props

    return (
        <Section>
            <div className={styles.articles}>
                {articlesMetadata.map((article) => {
                    return (
                        <ArticleCard
                            key={article.slug}
                            articleSlug={article.slug || ""}
                            articleImage={article.image || ""}
                            articleImageAlt={article.imageAlt || ""}
                            articleTitle={article.title || ""}
                            articleAuthor={article.author || ""}
                            articleDate={article.publishedHumanReadable || ""}
                        />
                    )
                })}
            </div>
        </Section>
    )
}
