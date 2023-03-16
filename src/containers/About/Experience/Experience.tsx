import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { SectionContent } from "@/components/Section/SectionContent"

import styles from "../AboutContent.module.scss"

export const Experience: React.FC = () => {
    const { t } = useTranslation(`about`)

    const experiences = t(`experience.items`, { returnObjects: true })

    return (
        <Section key={t(`experience.title`)}>
            <SectionTitle title={t(`experience.title`)} />
            {experiences.map((xp) => {
                return (
                    <SectionContent
                        key={xp.name}
                        image={xp.image}
                        imageAlt={xp.imageAlt}
                        readMore={xp.readMore}
                    >
                        <div className={`${styles.about__text}`}>
                            <div className={`${styles.title}`}>{xp.name}</div>
                            <div className={`${styles.subtitle}`}>{xp.position}</div>
                            <div className={`${styles.description}`}>{xp.description}</div>
                            <div className={`${styles.period}`}>{xp.period}</div>
                        </div>
                    </SectionContent>
                )
            })}
        </Section>
    )
}
