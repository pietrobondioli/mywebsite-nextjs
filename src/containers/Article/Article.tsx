import React from "react"
import Image from "next/image"

import { FALLBACK_IMAGE } from "@/utils/constants"

import styles from "./Article.module.scss"

export type ArticleProps = {
    article: Article
}

export const Article: React.FC<ArticleProps> = (props) => {
    const {
        article: { content, metadata },
    } = props

    return (
        <>
            <div className="w-full flex justify-center my-12">
                <Image
                    width={512}
                    height={256}
                    src={metadata.image || FALLBACK_IMAGE}
                    alt={metadata.imageAlt || ``}
                />
            </div>
            <article className={styles.article} dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}
