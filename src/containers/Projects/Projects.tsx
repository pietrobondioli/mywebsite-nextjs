import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionContent } from "@/components/Section/SectionContent"

import styles from "./Projects.module.scss"

const PROJECTS = {
    peepo_discord_bot: {
        image: `/icons/projects/pepe-computer-chair-256px.png`,
        readMore: true,
        readMoreTargetBlank: true,
        readMoreLink: `https://github.com/bondiolipietro/peepo-discord-bot`,
    },
    my_website: {
        image: `/icons/home/contact-256px.png`,
        readMore: true,
        readMoreTargetBlank: true,
        readMoreLink: `https://github.com/bondiolipietro/mywebsite-nextjs`,
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
                            <div className={styles.project__text}>
                                <div className={styles.name}>
                                    {t(`projects_infos.${project}.name`)}
                                </div>
                                <div className={styles.description}>
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
