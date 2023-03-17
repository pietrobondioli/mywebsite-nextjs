import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { SectionContent } from "@/components/Section/SectionContent"

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
                        <div className="flex items-center flex-col text-lg gap-2 text-center">
                            <b>{ed.name}</b>
                            <b>{ed.course}</b>
                            <p>{ed.description}</p>
                            <b className="text-base">{ed.period}</b>
                        </div>
                    </SectionContent>
                )
            })}
        </Section>
    )
}
