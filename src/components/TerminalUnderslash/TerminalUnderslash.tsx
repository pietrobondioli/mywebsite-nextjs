import React from "react"

import styles from "@/styles/components/TerminalUnderslash.module.scss"

type TerminalUnderslashProps = {
    isAnimationActive: boolean
}

export const TerminalUnderslash: React.FC<TerminalUnderslashProps> = (props) => {
    const { isAnimationActive } = props

    const animationClass = isAnimationActive
        ? styles.terminal__underslash_active
        : styles.terminal__underslash_disabled

    return <span className={`${styles.terminal__underslash} ${animationClass}`}>_</span>
}
