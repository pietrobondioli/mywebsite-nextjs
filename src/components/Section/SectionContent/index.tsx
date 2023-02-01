// React/Next Components
import React from "react"
import Link from "next/link"

// Hooks
import useTranslation from "@/hooks/useTranslation"

// Styles
import styles from "@/styles/components/Section/SectionContent.module.scss"

// Contents
import sectionContent from "./content"

const SectionContent = (props) => {
    const { children, text, image, imageAlt, readMore, readMoreLink, readMoreTargetBlank } = props
    const translation = useTranslation(sectionContent)

    return (
        <div className={styles.section__content}>
            <img className={styles.content__image} src={image} alt={imageAlt} />
            <div>
                <div className={styles.content__text}>{children || text}</div>
                {readMore &&
                    (!readMoreTargetBlank ? (
                        <Link href={readMoreLink}>
                            <a className={`button ${styles.content__button}`}>
                                {translation("readMore")}
                            </a>
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

export default SectionContent
