import React from "react"

import { TerminalUnderslash } from "@/components/TerminalUnderslash"

type SectionTitleProps = {
    title?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    const { title } = props

    return (
        <>
            {title && (
                <div className="w-full py-5 flex items-center justify-start text-xl">
                    {title} <TerminalUnderslash isAnimationActive />
                </div>
            )}
        </>
    )
}
