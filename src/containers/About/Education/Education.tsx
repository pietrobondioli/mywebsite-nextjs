import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { SectionContent } from "@/components/Section/SectionContent"

import styles from "../AboutContent.module.scss"

export const Education: React.FC = () => {
    const { t } = useTranslation(`about`)

    const educationItems = t(`education.items`, { returnObjects: true })

    return (
        <Section key={t(`education.title`)}>
            <SectionTitle title={t(`education.title`)} />
            {educationItems.map((ed) => {
                return (
                    <SectionContent
                        key={ed.name}
                        image={ed.image}
                        imageAlt={ed.imageAlt}
                        readMore={ed.readMore}
                    >
                        <div className={`${styles.about__text}`}>
                            <div className={`${styles.title}`}>{ed.name}</div>
                            <div className={`${styles.subtitle}`}>{ed.course}</div>
                            <div className={`${styles.description}`}>{ed.description}</div>
                            <div className={`${styles.period}`}>{ed.period}</div>
                        </div>
                    </SectionContent>
                )
            })}
        </Section>
    )
}
