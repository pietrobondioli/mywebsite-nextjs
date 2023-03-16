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
            name={locale}
            link={pathname}
            query={query}
            locale={changeTo}
            scroll={false}
        />
    )
}
