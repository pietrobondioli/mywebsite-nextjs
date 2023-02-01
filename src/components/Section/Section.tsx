import React from "react"

import styles from "@/styles/components/Section/Section.module.scss"

export type SectionProps = {
    sectionType?: "flex-h" | "flex-w"
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = (props) => {
    const { sectionType, children } = props

    return (
        <section className={`${styles.section} ${sectionType && styles[sectionType]}`}>
            {children}
        </section>
    )
}
