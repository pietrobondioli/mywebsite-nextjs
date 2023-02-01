// Components
import Section from "@/components/Section"
import SectionTitle from "@/components/Section/SectionTitle"

// Hooks
import useTranslation from "@/hooks/useTranslation"

// Styles
import styles from "@/styles/pages/About/Skills.module.scss"

import SkillItem from "./SkillItem"

// Content
import skillsContent from "./content"

const sectionContent = {
    "pt-BR": {
        title: "conhecimentos",
    },
    "en-US": {
        title: "skills",
    },
}

const Skills = () => {
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

export default Skills
