import React from "react"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/Button"

type SectionContentProps = {
    children?: React.ReactNode
    text?: string
    image?: string
    imageAlt?: string
    readMore?: boolean
    readMoreLink?: string
    readMoreTargetBlank?: boolean
}

export const SectionContent: React.FC<SectionContentProps> = (props) => {
    const { children, text, image, imageAlt, readMore, readMoreLink, readMoreTargetBlank } = props
    const { t } = useTranslation(`common`)

    return (
        <div className="max-h-min w-full flex items-center justify-between flex-col lg:flex-row gap-32">
            <Image
                width={128}
                height={128}
                className="rounded-full"
                src={image || `/icons/error/warning-128px.png`}
                alt={imageAlt || `No content.`}
            />
            <div className="flex items-center flex-col gap-6 px-12 grow">
                <div className="text-start text-lg my-4">{children || text}</div>
                {readMore &&
                    (readMoreTargetBlank ? (
                        <a href={readMoreLink} target="_blank" rel="noreferrer">
                            <Button label={t(`readMore`)} />
                        </a>
                    ) : (
                        <Link href={readMoreLink || ``}>
                            <Button label={t(`readMore`)} />
                        </Link>
                    ))}
            </div>
        </div>
    )
}
