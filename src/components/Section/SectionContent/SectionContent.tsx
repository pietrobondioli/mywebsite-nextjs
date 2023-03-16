import React from "react"
import Link from "next/link"
import { useTranslation } from "next-i18next"

import styles from "./SectionContent.module.scss"
import Image from "next/image"

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
    const { t } = useTranslation(`common`)

    return (
        <div className={styles.section__content}>
            <Image
                width={128}
                height={128}
                className={styles.content__image}
                src={image || `/icons/error/warning-128px.png`}
                alt={imageAlt || `No content.`}
            />
            <div>
                <div className={styles.content__text}>{children || text}</div>
                {readMore &&
                    (!readMoreTargetBlank ? (
                        <Link
                            href={readMoreLink || ``}
                            className={`button ${styles.content__button}`}
                        >
                            {t(`readMore`)}
                        </Link>
                    ) : (
                        <a
                            href={readMoreLink}
                            className={`button ${styles.content__button}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t(`readMore`)}
                        </a>
                    ))}
            </div>
        </div>
    )
}
