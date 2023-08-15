import React from "react"
import Image from "next/image"
import { Article } from "@prisma/client"

import { FALLBACK_IMAGE } from "@/utils/constants"

import styles from "./Article.module.scss"

import "highlight.js/styles/atom-one-dark-reasonable.css"

export type ArticleProps = {
    article: Article
}

export const ArticleContainer: React.FC<ArticleProps> = (props) => {
    const {
        article: { content, image_alt, image_url },
    } = props

    return (
        <>
            <div className="w-full flex justify-center my-12">
                <Image
                    width={512}
                    height={256}
                    src={image_url || FALLBACK_IMAGE}
                    alt={image_alt || ``}
                />
            </div>
            <article className={styles.article} dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}
