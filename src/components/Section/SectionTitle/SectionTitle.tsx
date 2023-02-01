import React from "react"

import { TerminalUnderslash } from "@/components/TerminalUnderslash"

import styles from "./SectionTitle.module.scss"

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
