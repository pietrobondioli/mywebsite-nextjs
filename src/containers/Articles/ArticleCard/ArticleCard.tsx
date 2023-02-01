// React/Next Components
import React from "react"
import Link from "next/link"

import useTranslation from "@/hooks/useTranslation"

import styles from "./ArticleCard.module.scss"

const articleCardContent = {
    "pt-BR": {
        by: "por",
    },
    "en-US": {
        by: "by",
    },
}

export type ArticleCardProps = {
    articleSlug: string
    articleImage: string
    articleImageAlt: string
    articleTitle: string
    articleDate: string
    articleAuthor: string
}

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
    const { articleSlug, articleImage, articleImageAlt, articleTitle, articleDate, articleAuthor } =
        props
    const translate = useTranslation(articleCardContent)

    return (
        <Link href={`/articles/${articleSlug}`}>
            <div className={styles.articlesCard}>
                <img src={articleImage} alt={articleImageAlt} className={styles.cardImage} />
                <div className={styles.cardText}>
                    <div className={styles.title}>{articleTitle}</div>
                    <div className={styles.date}>{articleDate}</div>
                    <div className={styles.author}>
                        {translate("by")}: {articleAuthor}
                    </div>
                </div>
            </div>
        </Link>
    )
}
