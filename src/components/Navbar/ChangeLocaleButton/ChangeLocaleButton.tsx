// React/Next Components
import React, { useContext } from "react"
import { useRouter } from "next/router"

import useObjectTranslation from "@/hooks/useObjectTranslation"
import { LocaleContext } from "@/contexts/LocaleContext"

import { NavbarItem } from "../NavbarItem"

import queryTranslations from "./queryTranslations"

export const ChangeLocaleButton: React.FC = () => {
    const router = useRouter()
    const { locales, locale } = useContext(LocaleContext)

    const changeLocale = locales.filter((loc) => {
        return loc !== locale
    })

    const translateObject = useObjectTranslation(queryTranslations, changeLocale[0])

    return (
        <NavbarItem
            key="changeLocale"
            itemName={locale}
            itemLink={router.pathname}
            itemQuery={translateObject(router.query) as {}}
            itemLocale={changeLocale[0]}
            itemScroll={false}
        />
    )
}
