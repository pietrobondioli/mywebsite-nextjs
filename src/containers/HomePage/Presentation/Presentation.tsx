import React from "react"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { SectionContent } from "@/components/Section/SectionContent"
import useTranslation from "@/hooks/useTranslation"

import presentationContent from "./content"

export const Presentation: React.FC = () => {
    return (
        <div id="presentation">
            {presentationContent.map((content) => {
                const translate = useTranslation(content)

                return (
                    <Section key={translate("title")} sectionType="flex-h">
                        <SectionTitle title={translate("title")} />
                        <SectionContent
                            text={translate("text")}
                            image={content.image}
                            imageAlt={translate("imageAlt")}
                            readMore={content.readMore}
                            readMoreLink={content.readMoreLink}
                        />
                    </Section>
                )
            })}
        </div>
    )
}
