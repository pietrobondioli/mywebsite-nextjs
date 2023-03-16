import React from "react"

import { useThemeActions, useThemeState } from "@/store/theme-store"

import styles from "./ToggleThemeButton.module.scss"

export const ToggleThemeButton: React.FC = () => {
    const { theme } = useThemeState()
    const { TOGGLE_THEME } = useThemeActions()

    const isDarkTheme = theme === `dark`

    return (
        <div className={styles.toggleButton}>
            <input
                className={styles.toggleButton__input}
                type="checkbox"
                name=""
                id=""
                checked={!isDarkTheme}
                onChange={() => {
                    TOGGLE_THEME()
                }}
            />
            <div className={styles.toggleButton__ball} />
            <div className={styles.toggleButton__sun} />
            <div className={styles.toggleButton__moon} />
        </div>
    )
}
