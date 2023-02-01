import React from "react"
import Link from "next/link"

import useTranslation from "@/hooks/useTranslation"
import styles from "@/styles/components/Section/SectionContent.module.scss"

import sectionContent from "./content"

type SectionContentProps = {
    children?: React.ReactNode
    text?: string
    image?: string
    imageAlt?: string
    readMore?: boolean
    readMoreLink?: string
    readMoreTargetBlank?: boolean
}

export const SectionContent: React.FC<SectionContentProps> = (props) => {
    const { children, text, image, imageAlt, readMore, readMoreLink, readMoreTargetBlank } = props
    const translation = useTranslation(sectionContent)

    return (
        <div className={styles.section__content}>
            <img className={styles.content__image} src={image} alt={imageAlt} />
            <div>
                <div className={styles.content__text}>{children || text}</div>
                {readMore &&
                    (!readMoreTargetBlank ? (
                        <Link
                            href={readMoreLink || ""}
                            className={`button ${styles.content__button}`}
                        >
                            {translation("readMore")}
                        </Link>
                    ) : (
                        <a
                            href={readMoreLink}
                            className={`button ${styles.content__button}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {translation("readMore")}
                        </a>
                    ))}
            </div>
        </div>
    )
}
