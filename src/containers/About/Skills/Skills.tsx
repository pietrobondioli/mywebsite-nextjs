import React from "react"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"
import useTranslation from "@/hooks/useTranslation"

import styles from "./Skills.module.scss"
import { SkillItem } from "./SkillItem"
import skillsContent from "./content"

const sectionContent = {
    "pt-BR": {
        title: "conhecimentos",
    },
    "en-US": {
        title: "skills",
    },
}

export const Skills: React.FC = () => {
    let translate = useTranslation(sectionContent)

    return (
        <Section key={translate("title")}>
            <SectionTitle title={translate("title")} />

            {skillsContent.map((skillType) => {
                translate = useTranslation(skillType)

                return (
                    <div key={translate("typeName")} className={styles.skills__content}>
                        <div className={styles.name}>{translate("typeName")}</div>
                        <div className={styles.skills}>
                            {skillType.skills.map((skill) => {
                                return (
                                    <SkillItem
                                        key={skill.name}
                                        skillLink={skill.link}
                                        skillName={skill.name}
                                        skillImage={skill.image}
                                        skillImageAlt={skill.imageAlt}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </Section>
    )
}
