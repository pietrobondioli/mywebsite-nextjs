// React/Next Components
import React from "react"

// Styles
import styles from "@/styles/pages/Articles/Articles.module.scss"

// Components
import Section from "@/components/Section"

import ArticleCard from "./ArticleCard"

const Articles = ({ articles }) => {
    return (
        <Section>
            <div className={styles.articles}>
                {articles.map((article) => {
                    return (
                        <ArticleCard
                            key={article.slug}
                            articleSlug={article.slug}
                            articleImage={article.image}
                            articleImageAlt={article.imageAlt}
                            articleTitle={article.title}
                            articleAuthor={article.author}
                            articleDate={article.publishedHumanReadable}
                        />
                    )
                })}
            </div>
        </Section>
    )
}

export default Articles
