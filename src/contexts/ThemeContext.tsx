import React, { createContext, useState } from "react"

type ThemeContextType = {
    theme: string
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {},
})

const themes = {
    dark: "dark",
    light: "light",
}

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(themes.dark)
    let storedTheme

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme(themes.dark)
        }
        if (theme === "dark") {
            setTheme(themes.light)
        }
    }

    React.useEffect(() => {
        storedTheme = localStorage.getItem("theme")
        if (storedTheme === "undefined" || storedTheme === null) {
            localStorage.setItem("theme", theme)

            return
        }
        if (storedTheme !== theme) {
            toggleTheme()
        }
    }, [])

    React.useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
