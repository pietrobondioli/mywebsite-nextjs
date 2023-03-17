import React from "react"
import Link from "next/link"
import { useTranslation } from "next-i18next"
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
            <div className="group cursor-pointer relative flex flex-col justify-start items-center text-black overflow-hidden bg-white-700">
                <Image
                    width={512}
                    height={256}
                    src={articleImage}
                    alt={articleImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 duration-500"
                />
                <div className="relative h-full bottom-0 group-hover:bottom-3 duration-500 px-4 py-6 gap-2 flex flex-col bg-white-700">
                    <div className="text-xl">{articleTitle}</div>
                    <div className="text-grey-opaque">{articleDate}</div>
                    <div className="text-base">
                        {t(`card.by`)}: {articleAuthor}
                    </div>
                </div>
            </div>
        </Link>
    )
}
