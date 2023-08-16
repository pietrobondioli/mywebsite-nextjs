import { ParsedUrlQueryInput } from "querystring"

import React from "react"
import Link from "next/link"

export type NavbarItemProps = {
    name?: string
    link: string
    query?: string | ParsedUrlQueryInput
    locale?: string
    scroll?: boolean
}

export const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    const { name, link, query, locale, scroll } = props

    return (
        <Link
            href={{
                pathname: link,
                query: query,
            }}
            locale={locale}
            scroll={scroll}
            className="h-max w-full py-1 px-2 flex justify-center items-center text-base font-semibold text-center text-black hover:text-primary dark:text-white hover:dark:text-primary-light duration-500 mx-3 lg:text-lg cursor-pointer"
        >
            {name}
        </Link>
    )
}
