import React from "react"
import Image from "next/image"

type SkillItemProps = {
    skillLink: string
    skillName: string
    skillImage: string
    skillImageAlt: string
}

export const SkillItem: React.FC<SkillItemProps> = (props) => {
    const { skillLink, skillName, skillImage, skillImageAlt } = props

    return (
        <a
            href={skillLink}
            className="flex items-center justify-between py-2 px-4 outline-2 outline-primary-dark rounded-sm duration-500 shadow-sm outline hover:bg-primary-dark text-primary-dark hover:text-white-500 h-12"
            target="blank"
        >
            <div className="text-base font-semibold mx-1">{skillName}</div>
            <Image src={skillImage} alt={skillImageAlt} width={32} height={32} />
        </a>
    )
}
