import React from "react"

import styles from "./Article.module.scss"

export type ArticleProps = {
    article: Article
}

export const Article: React.FC<ArticleProps> = (props) => {
    const { article } = props
    const { metadata } = article

    return (
        <>
            <img className={styles.article_img} src={metadata.image} alt={metadata.imageAlt} />
            <article
                className={styles.article}
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </>
    )
}
