import React from "react"

import { useUserIsAdmin } from "@/hooks/useUserIsAdmin"
import { ChangeLocaleButton } from "../ChangeLocaleButton"
import { Logo } from "../Logo"
import { NavbarItem } from "../NavbarItem"
import { ToggleThemeButton } from "../ToggleThemeButton"

type DesktopNavbarProps = {
    items: { name: string; link: string }[]
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = (props) => {
    const { items } = props

    const isAdmin = useUserIsAdmin()

    return (
        <nav className="w-full max-w-full h-12 px-3 fixed flex justify-between items-center z-40 bg-white shadow dark:bg-secondary">
            <Logo />

            <div className="h-full w-auto top-0 left-0 flex items-center relative flex-row justify-end">
                <ToggleThemeButton />
                <ChangeLocaleButton />
                {Array.isArray(items)
                    ? items.map((item) => {
                          return <NavbarItem key={item.name} name={item.name} link={item.link} />
                      })
                    : null}
                {isAdmin && <NavbarItem name="admin" link="/admin" />}
            </div>
        </nav>
    )
}
