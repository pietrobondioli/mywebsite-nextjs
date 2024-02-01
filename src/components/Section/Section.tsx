import React from "react"

export type SectionProps = {
    stretchToViewportHeight?: boolean
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = (props) => {
    const { children, stretchToViewportHeight } = props

    const minHeightClass = stretchToViewportHeight
        ? `min-h-svh`
        : `lg:min-h-[60vh] xl:min-h-[50vh] 2xl:min-h-[40vh]`

    return (
        <section
            className={`${minHeightClass} grid gap-4 px-6 md:px-8 py-12 lg:px-32 xl:px-48 2xl:px-64 mx-auto max-w-screen-2xl`}
        >
            {children}
        </section>
    )
}
