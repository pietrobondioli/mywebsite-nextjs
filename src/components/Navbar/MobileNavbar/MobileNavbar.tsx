import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { useRouter } from "next/router"
import React, { useCallback, useEffect, useRef } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"

import { useNavBarActions, useNavBarState } from "@/store/navbar-store"

import { ChangeLocaleButton } from "../ChangeLocaleButton"
import { Logo } from "../Logo"
import { NavbarItem } from "../NavbarItem"
import { ToggleThemeButton } from "../ToggleThemeButton"

import { useUserIsAdmin } from "@/hooks/useUserIsAdmin"
import styles from "./MobileNavbar.module.scss"

type MobileNavbarProps = {
    items: { name: string; link: string }[]
}

export const MobileNavbar: React.FC<MobileNavbarProps> = (props) => {
    const { items } = props

    const router = useRouter()
    const { isOpen } = useNavBarState()
    const { TOGGLE_NAVBAR, RESET_NAVBAR } = useNavBarActions()
    const refMenu = useRef<HTMLDivElement>(null)
    const isAdmin = useUserIsAdmin()

    const navMenuClass = isOpen
        ? `${styles.navbar__menu_active}`
        : `${styles.navbar__menu_disabled}`

    const resetMenuState = useCallback(() => {
        RESET_NAVBAR()
        if (refMenu.current) {
            enableBodyScroll(refMenu.current)
        }
    }, [RESET_NAVBAR])

    useEffect(() => {
        if (refMenu.current === null) return

        if (isOpen) {
            disableBodyScroll(refMenu.current)
        }

        enableBodyScroll(refMenu.current)
    }, [isOpen])

    useEffect(() => {
        window.addEventListener(`resize`, resetMenuState)
        router.events.on(`routeChangeStart`, resetMenuState)

        return () => {
            window.removeEventListener(`resize`, resetMenuState)
            router.events.off(`routeChangeStart`, resetMenuState)
        }
    }, [resetMenuState, router.events])

    return (
        <nav className="w-full max-w-full h-12 px-3 fixed flex justify-between items-center z-20">
            <div className="flex z-40  h-full w-full justify-between items-center">
                <Logo />
                <button
                    type="button"
                    onClick={() => {
                        TOGGLE_NAVBAR()
                    }}
                    className={`text-2xl p-2 border-none outline-none bg-transparent cursor-pointer duration-500 flex justify-center items-center dark:text-white`}
                >
                    {isOpen ? <IoMdClose /> : <HiMenuAlt3 />}
                </button>
            </div>

            <div
                ref={refMenu}
                className={`${navMenuClass} absolute h-svh w-full top-0 left-0 flex flex-col justify-center items-center bg-white text-black dark:bg-secondary dark:text-white z-30 duration-700 gap-4`}
            >
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
