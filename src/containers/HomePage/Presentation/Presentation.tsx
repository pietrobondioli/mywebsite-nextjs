import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import { SectionContent } from "@/components/Section/SectionContent"

const SECTIONS = {
    introduction: {
        image: `/assets/icons/home/pietro-2023.jpg`,
        readMore: false,
        readMoreLink: ``,
    },
    about: {
        image: `/assets/icons/home/brain-256px.png`,
        readMore: true,
        readMoreLink: `/about`,
    },
    articles: {
        image: `/assets/icons/home/article-256px.png`,
        readMore: true,
        readMoreLink: `/articles`,
    },
    projects: {
        image: `/assets/icons/home/book-256px.png`,
        readMore: true,
        readMoreLink: `/projects`,
    },
    // contact: {
    //     image: `/assets/icons/home/contact-256px.png`,
    //     readMore: true,
    //     readMoreLink: `/contact`,
    // },
} as const

export const Presentation: React.FC = () => {
    const { t } = useTranslation(`home`)

    return (
        <div id="presentation">
            {Object.keys(SECTIONS).map((key) => {
                const section = key as keyof typeof SECTIONS
                const content = SECTIONS[section]

                return (
                    <Section key={section}>
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
