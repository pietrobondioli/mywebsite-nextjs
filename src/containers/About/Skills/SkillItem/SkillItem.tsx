import React from "react"
import Image from "next/image"

import styles from "./SkillItem.module.scss"

type SkillItemProps = {
    skillLink: string
    skillName: string
    skillImage: string
    skillImageAlt: string
}

export const SkillItem: React.FC<SkillItemProps> = (props) => {
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
