import React from "react"
import { useTranslation } from "next-i18next"
import Image from "next/image"

import { LinkButton } from "@/components/LinkButton"

import styles from "./SectionContent.module.scss"

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
                        <LinkButton href={readMoreLink || ``} label={t(`readMore`)} />
                    ) : (
                        <LinkButton
                            href={readMoreLink}
                            target="_blank"
                            rel="noreferrer"
                            label={t(`readMore`)}
                        />
                    ))}
            </div>
        </div>
    )
}
