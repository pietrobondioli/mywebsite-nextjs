// React/Next Components
import React from "react"
import { useRouter } from "next/router"

import { NavbarItem } from "../NavbarItem"

export const ChangeLocaleButton: React.FC = () => {
    const { pathname, query, locales, locale } = useRouter()

    const changeTo = locales?.find((l) => l !== locale)

    return (
        <NavbarItem
            key="changeLocale"
            itemName={locale}
            itemLink={pathname}
            itemQuery={query}
            itemLocale={changeTo}
            itemScroll={false}
        />
    )
}
