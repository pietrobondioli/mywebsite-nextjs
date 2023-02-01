import React from "react"

import { Section } from "@/components/Section"
import { SectionContent } from "@/components/Section/SectionContent"
import useTranslation from "@/hooks/useTranslation"
import styles from "@/styles/pages/Projects/Projects.module.scss"

import projectsContent from "./content"

export const Projects: React.FC = () => {
    return (
        <div>
            {projectsContent.map((content) => {
                const translate = useTranslation(content)

                return (
                    <Section key={translate("name")}>
                        <SectionContent
                            image={content.image}
                            imageAlt={translate("imageAlt")}
                            readMore={content.readMore}
                            readMoreLink={content.readMoreLink}
                            readMoreTargetBlank={content.readMoreTargetBlank}
                        >
                            <div className={styles.project__text}>
                                <div className={styles.name}>{translate("name")}</div>
                                <div className={styles.description}>{translate("description")}</div>
                            </div>
                        </SectionContent>
                    </Section>
                )
            })}
        </div>
    )
}
