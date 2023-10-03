import { signOut } from "next-auth/react"
import React from "react"

import { MenuIcon, MenuItem, MenuItemList, NavigationMenu } from "@/components/NavigationMenu"
import { useLoggedUser } from "@/hooks/useLoggedUser"
import { useUserIsAdmin } from "@/hooks/useUserIsAdmin"
import { FaUserCircle } from "react-icons/fa"
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
    const loggedUser = useLoggedUser()

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
                {loggedUser && (
                    <NavigationMenu>
                        <MenuIcon>
                            {loggedUser.image ? (
                                <img
                                    src={loggedUser.image}
                                    alt="avatar"
                                    className="rounded-full w-10"
                                />
                            ) : (
                                <FaUserCircle />
                            )}
                        </MenuIcon>
                        <MenuItemList>
                            {isAdmin && <MenuItem href="/admin">Admin</MenuItem>}
                            <MenuItem onSelect={() => signOut()}>Logout</MenuItem>
                        </MenuItemList>
                    </NavigationMenu>
                )}
            </div>
        </nav>
    )
}
