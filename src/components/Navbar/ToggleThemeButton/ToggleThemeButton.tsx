import React, { useContext } from "react"

// Styles
import { ThemeContext } from "@/contexts/ThemeContext"

import styles from "./ToggleThemeButton.module.scss"

export const ToggleThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    let isDarkTheme
    if (theme === "dark") {
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
                    toggleTheme()
                }}
            />
            <div className={styles.toggleButton__ball} />
            <div className={styles.toggleButton__sun} />
            <div className={styles.toggleButton__moon} />
        </div>
    )
}
