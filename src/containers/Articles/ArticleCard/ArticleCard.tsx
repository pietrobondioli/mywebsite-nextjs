import React from "react"
import Link from "next/link"
import { useTranslation } from "next-i18next"

import styles from "./ArticleCard.module.scss"
import Image from "next/image"

export type ArticleCardProps = {
    articleSlug: string
    articleImage: string
    articleImageAlt: string
    articleTitle: string
    articleDate: string
    articleAuthor: string
}

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
    const { t } = useTranslation(`articles`)
    const { articleSlug, articleImage, articleImageAlt, articleTitle, articleDate, articleAuthor } =
        props

    return (
        <Link href={`/articles/${articleSlug}`}>
            <div className={styles.articlesCard}>
                <Image
                    width={128}
                    height={128}
                    src={articleImage}
                    alt={articleImageAlt}
                    className={styles.cardImage}
                />
                <div className={styles.cardText}>
                    <div className={styles.title}>{articleTitle}</div>
                    <div className={styles.date}>{articleDate}</div>
                    <div className={styles.author}>
                        {t(`card.by`)}: {articleAuthor}
                    </div>
                </div>
            </div>
        </Link>
    )
}
