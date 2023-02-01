// React/Next Components
import React from "react"

// Styles
import styles from "@/styles/components/Section/SectionTitle.module.scss"

// Components
import { TerminalUnderslash } from "../../TerminalUnderslash"

type SectionTitleProps = {
    title?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    const { title } = props

    return (
        <>
            {title && (
                <div className={styles.section__title}>
                    {title} <TerminalUnderslash isAnimationActive />
                </div>
            )}
        </>
    )
}
