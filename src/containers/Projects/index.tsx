// Components
import Section from "@/components/Section"
import SectionContent from "@/components/Section/SectionContent"

// Hooks
import useTranslation from "@/hooks/useTranslation"

// Styles
import styles from "@/styles/pages/Projects/Projects.module.scss"

// Content
import projectsContent from "./content"

const ProjectsSection = () => {
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

export default ProjectsSection
