import React from "react"

// Styles
import styles from "./ToggleThemeButton.module.scss"
import { useThemeActions, useThemeState } from "@/store/theme-store"

export const ToggleThemeButton: React.FC = () => {
    const { theme } = useThemeState()
    const { TOGGLE_THEME } = useThemeActions()
    let isDarkTheme
    if (theme === `dark`) {
        isDarkTheme = true
    }

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
