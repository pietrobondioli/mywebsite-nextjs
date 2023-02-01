// React/Next Components
import Image from "next/image"

// Styles
import styles from "@/styles/pages/About/SkillItem.module.scss"

const SkillsItem = (props) => {
    const { skillLink, skillName, skillImage, skillImageAlt } = props

    return (
        <a href={skillLink} className={styles.skill} target="blank">
            <div className={styles.name}>{skillName}</div>
            <Image
                className={styles.image}
                src={skillImage}
                alt={skillImageAlt}
                width={32}
                height={32}
            />
        </a>
    )
}

export default SkillsItem
