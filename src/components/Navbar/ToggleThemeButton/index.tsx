import React from "react"

// Styles
import styles from "@/styles/components/Navbar/ToggleThemeButton.module.scss"
import { ThemeContext } from "@/contexts/ThemeContext"

const ToggleThemeButton = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext)
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

export default ToggleThemeButton
