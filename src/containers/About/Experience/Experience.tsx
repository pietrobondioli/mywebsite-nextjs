import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { SectionContent } from "@/components/Section/SectionContent"

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
                        <div className="flex items-center flex-col text-lg gap-2 text-center">
                            <p>{xp.name}</p>
                            <b className="text-lg">{xp.position}</b>
                            <p className="text-primary">{xp.stack}</p>
                            <div className="flex flex-col">
                                {xp.description.split("\n").map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                            <b className="text-base">{xp.period}</b>
                        </div>
                    </SectionContent>
                )
            })}
        </Section>
    )
}
