import React from "react"
import Link from "next/link"

import styles from "./NavbarItem.module.scss"

export type NavbarItemProps = {
    itemName?: string
    itemLink: string
    itemQuery?: {}
    itemLocale?: string
    itemScroll?: boolean
}

export const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    const { itemName, itemLink, itemQuery, itemLocale, itemScroll } = props

    return (
        <Link
            href={
                {
                    pathname: itemLink,
                    query: itemQuery,
                } || ""
            }
            locale={itemLocale}
            scroll={itemScroll}
            className={styles.menu__item}
        >
            {itemName}
        </Link>
    )
}
