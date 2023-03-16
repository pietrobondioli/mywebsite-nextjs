import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { SectionContent } from "@/components/Section/SectionContent"

const SECTIONS = {
    introduction: {
        image: `/icons/home/pietro-720px.jpg`,
        readMore: false,
        readMoreLink: ``,
    },
    about: {
        image: `/icons/home/brain-256px.png`,
        readMore: true,
        readMoreLink: `/about`,
    },
    articles: {
        image: `/icons/home/article-256px.png`,
        readMore: true,
        readMoreLink: `/articles`,
    },
    projects: {
        image: `/icons/home/book-256px.png`,
        readMore: true,
        readMoreLink: `/projects`,
    },
    contact: {
        image: `/icons/home/contact-256px.png`,
        readMore: true,
        readMoreLink: `/contact`,
    },
} as const

export const Presentation: React.FC = () => {
    const { t } = useTranslation(`home`)

    return (
        <div id="presentation">
            {Object.keys(SECTIONS).map((key) => {
                const section = key as keyof typeof SECTIONS
                const content = SECTIONS[section]

                return (
                    <Section key={section} sectionType="flex-h">
                        <SectionTitle title={t(`presentation.${section}.title`)} />
                        <SectionContent
                            text={t(`presentation.${section}.text`)}
                            image={content.image}
                            imageAlt={t(`presentation.${section}.imageAlt`)}
                            readMore={content.readMore}
                            readMoreLink={content.readMoreLink}
                        />
                    </Section>
                )
            })}
        </div>
    )
}
