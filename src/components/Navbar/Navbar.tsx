// React/Next Components
import React, { useCallback, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { useTranslation } from "next-i18next"

import styles from "./Navbar.module.scss"
import { ToggleThemeButton } from "./ToggleThemeButton/ToggleThemeButton"
import { ChangeLocaleButton } from "./ChangeLocaleButton/ChangeLocaleButton"
import { NavbarItem } from "./NavbarItem/NavbarItem"
import { useNavBarActions, useNavBarState } from "@/store/navbar-store"

export const Navbar: React.FC = () => {
    const { t } = useTranslation(`common`)

    const navbarItems = t(`navbar`, { returnObjects: true })

    const router = useRouter()
    const { isOpen } = useNavBarState()
    const { TOGGLE_NAVBAR, RESET_NAVBAR } = useNavBarActions()
    const refMenu = useRef<HTMLDivElement>(null)

    const resetMenuState = useCallback(() => {
        RESET_NAVBAR()
        if (refMenu.current) {
            enableBodyScroll(refMenu.current)
        }
    }, [RESET_NAVBAR])

    useEffect(() => {
        if (refMenu.current === null) return

        if (!isOpen) {
            enableBodyScroll(refMenu.current)
        } else {
            disableBodyScroll(refMenu.current)
        }
    }, [isOpen])

    useEffect(() => {
        window.addEventListener(`resize`, resetMenuState)
        router.events.on(`routeChangeStart`, resetMenuState)
        clearAllBodyScrollLocks()

        return () => {
            window.removeEventListener(`resize`, resetMenuState)
            router.events.off(`routeChangeStart`, resetMenuState)
        }
    }, [resetMenuState, router.events])

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.navbar__logo} />
            </Link>
            <button
                type="button"
                onClick={() => {
                    TOGGLE_NAVBAR()
                }}
                className={`${styles.navbar__button}
        ${isOpen ? `${styles.navbar__button_active}` : `${styles.navbar__button_disabled}`}`}
            />

            <div
                ref={refMenu}
                className={`${styles.navbar__menu}
            ${isOpen ? `${styles.navbar__menu_active}` : `${styles.navbar__menu_disabled}`}`}
            >
                <ToggleThemeButton />
                <ChangeLocaleButton />
                {navbarItems.map((item) => {
                    return <NavbarItem key={item.name} itemName={item.name} itemLink={item.link} />
                })}
            </div>
        </nav>
    )
}

export default Navbar
