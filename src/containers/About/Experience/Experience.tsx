import React, { Fragment } from "react"
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
                const descriptions = xp.description.split("\n")

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
                                {descriptions.map((line, index) => (
                                    <Fragment key={index}>
                                        <p className="text-justify text-base">{line}</p>
                                        {index < descriptions.length - 1 && <span className="text-xs">-</span>}
                                    </Fragment>
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
