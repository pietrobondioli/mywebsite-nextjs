import React from "react"
import { useRouter } from "next/router"

import { NavbarItem } from "../NavbarItem"

export const ChangeLocaleButton: React.FC = () => {
    const router = useRouter()
    const { pathname, query, locales, locale } = router

    const changeTo = locales?.find((l) => l !== locale)

    return (
        <NavbarItem
            key="changeLocale"
            name={locale}
            link={pathname}
            query={{ ...query, checkSlug: `true`, targetLang: changeTo }}
            locale={changeTo}
            scroll={false}
        />
    )
}
