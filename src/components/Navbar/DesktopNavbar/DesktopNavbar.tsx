import React from "react"

import { ToggleThemeButton } from "../ToggleThemeButton"
import { ChangeLocaleButton } from "../ChangeLocaleButton"
import { NavbarItem } from "../NavbarItem"
import { Logo } from "../Logo"

type DesktopNavbarProps = {
    items: { name: string; link: string }[]
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = (props) => {
    const { items } = props

    return (
        <nav className="w-full max-w-full h-12 px-3 fixed flex justify-between items-center z-40 bg-white dark:bg-secondary">
            <Logo />

            <div className="h-full w-auto top-0 left-0 flex items-center relative flex-row justify-end">
                <ToggleThemeButton />
                <ChangeLocaleButton />
                {items.map((item) => {
                    return <NavbarItem key={item.name} name={item.name} link={item.link} />
                })}
            </div>
        </nav>
    )
}
