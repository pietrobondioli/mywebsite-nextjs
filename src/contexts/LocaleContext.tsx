// React/Next Components
import React, { createContext } from "react"
import { useRouter } from "next/router"

type LocaleContextType = {
    locales: string[]
    locale?: string
    defaultLocale: string
}

const LocaleContext = createContext<LocaleContextType>({
    locales: [],
    locale: "",
    defaultLocale: "",
})

const LocaleContextProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const { locales = ["en-US"], locale, defaultLocale = "en-US" } = router

    return (
        <LocaleContext.Provider value={{ locales, locale, defaultLocale }}>
            {children}
        </LocaleContext.Provider>
    )
}

export { LocaleContext, LocaleContextProvider }
