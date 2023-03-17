import React from "react"
import Image from "next/image"

type SkillItemProps = {
    name: string
    image: string
    imageAlt: string
}

export const SkillItem: React.FC<SkillItemProps> = (props) => {
    const { name, image, imageAlt } = props

    return (
        <div className="flex items-center justify-between py-2 px-4 outline-2 outline-primary-dark rounded-sm duration-500 shadow-sm outline hover:bg-primary-dark text-primary-dark hover:text-white-500 h-12 cursor-pointer">
            <div className="text-base font-semibold mx-1">{name}</div>
            <Image src={image} alt={imageAlt} width={32} height={32} />
        </div>
    )
}
