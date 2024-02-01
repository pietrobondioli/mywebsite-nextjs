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
        <Link
            href={`/articles/${articleSlug}`}
            className="group cursor-pointer relative flex flex-col justify-start items-center text-black overflow-hidden bg-white-900 dark:bg-secondary h-96 w-72 flex-shrink-0 min-w-0 shadow-lg rounded-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white-800"
        >
            <div className="w-full h-2/5 overflow-hidden relative">
                <Image
                    src={articleImage}
                    alt={articleImageAlt}
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 duration-300"
                    layout="fill"
                />
            </div>
            <div className="relative bottom-0 group-hover:bottom-3 duration-300 px-4 py-6 gap-2 flex flex-col justify-between w-full h-3/5 bg-white-900 dark:bg-secondary border border-solid border-white-900 dark:border-secondary">
                <div className="text-lg dark:text-white-500">
                    {articleTitle}
                </div>
                <div className="flex flex-col">
                    <div className="text-gray-600">{articleDate}</div>
                    <div className="text-base dark:text-white-700">
                        {t(`card.by`)}: {articleAuthor}
                    </div>
                </div>
            </div>
        </Link >
    )
}
