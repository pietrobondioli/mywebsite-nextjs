import { useTranslation } from "next-i18next"
import React from "react"

import { Section } from "@/components/Section"
import { SectionContent } from "@/components/Section/SectionContent"

const PROJECTS = {
    brasil_interface: {
        image: `/assets/icons/projects/brasil-interface-logo-250px.png`,
        readMore: true,
        readMoreTargetBlank: true,
        readMoreLink: `https://github.com/pietrobondioli/brasil-interface`,
    },
    my_website: {
        image: `/assets/icons/home/contact-256px.png`,
        readMore: true,
        readMoreTargetBlank: true,
        readMoreLink: `https://github.com/pietrobondioli/mywebsite-nextjs`,
    },
    peepo_discord_bot: {
        image: `/assets/icons/projects/pepe-computer-chair-256px.png`,
        readMore: true,
        readMoreTargetBlank: true,
        readMoreLink: `https://github.com/pietrobondioli/peepo-discord-bot`,
    },
} as const

export const Projects: React.FC = () => {
    const { t } = useTranslation(`projects`)

    return (
        <div>
            {Object.keys(PROJECTS).map((key) => {
                const project = key as keyof typeof PROJECTS
                const content = PROJECTS[project]

                return (
                    <Section key={project}>
                        <SectionContent
                            image={content.image}
                            imageAlt={t(`projects_infos.${project}.imageAlt`)}
                            readMore={content.readMore}
                            readMoreLink={content.readMoreLink}
                            readMoreTargetBlank={content.readMoreTargetBlank}
                        >
                            <div>
                                <div className="text-center py-2 font-semibold">
                                    {t(`projects_infos.${project}.name`)}
                                </div>
                                <div className="text-justify">
                                    {t(`projects_infos.${project}.description`)}
                                </div>
                            </div>
                        </SectionContent>
                    </Section>
                )
            })}
        </div>
    )
}
