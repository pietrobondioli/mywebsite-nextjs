import React from "react"

import { TerminalUnderslash } from "@/components/TerminalUnderslash"

type SectionTitleProps = {
    title?: string
    goBack?: () => void
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    const { title, goBack } = props

    return (
        <div className="w-full flex justify-between flex-row">
            {title && (
                <h2 className="w-full py-5 flex items-center justify-start text-xl">
                    {title} <TerminalUnderslash isAnimationActive />
                </h2>
            )}
            {goBack && (
                <button
                    onClick={goBack}
                    className="py-5 text-base whitespace-nowrap text-gray-500 hover:text-gray-700 duration-150 dark:text-gray-400 dark:hover:text-gray-200 flex items-center justify-end"
                >
                    Go Back
                </button>
            )}
        </div>
    )
}
