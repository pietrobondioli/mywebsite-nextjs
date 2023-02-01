// React/Next Components
import React, { useContext, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

import styles from "@/styles/components/Navbar/Navbar.module.scss"
import useTranslation from "@/hooks/useTranslation"
import { NavbarContext } from "@/contexts/NavbarContext"

import { ToggleThemeButton } from "./ToggleThemeButton/ToggleThemeButton"
import { ChangeLocaleButton } from "./ChangeLocaleButton/ChangeLocaleButton"
import { NavbarItem } from "./NavbarItem/NavbarItem"
import navbarContent from "./content"

export const Navbar: React.FC = () => {
    const router = useRouter()
    let translate
    const { isNavbarOpen, setIsNavbarOpen } = useContext(NavbarContext)
    const refMenu = useRef<HTMLDivElement>(null)

    const resetMenuState = () => {
        setIsNavbarOpen(false)
        if (refMenu.current) enableBodyScroll(refMenu.current)
    }

    React.useEffect(() => {
        if (refMenu.current === null) return

        if (!isNavbarOpen) {
            enableBodyScroll(refMenu.current)
        } else {
            disableBodyScroll(refMenu.current)
        }
    }, [isNavbarOpen])

    React.useEffect(() => {
        window.addEventListener("resize", resetMenuState)
        router.events.on("routeChangeStart", resetMenuState)
        clearAllBodyScrollLocks()

        return () => {
            window.removeEventListener("resize", resetMenuState)
            router.events.off("routeChangeStart", resetMenuState)
        }
    }, [])

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.navbar__logo} />
            </Link>
            <button
                type="button"
                onClick={() => {
                    setIsNavbarOpen(!isNavbarOpen)
                }}
                className={`${styles.navbar__button}
        ${isNavbarOpen ? `${styles.navbar__button_active}` : `${styles.navbar__button_disabled}`}`}
            />

            <div
                ref={refMenu}
                className={`${styles.navbar__menu}
            ${isNavbarOpen ? `${styles.navbar__menu_active}` : `${styles.navbar__menu_disabled}`}`}
            >
                <ToggleThemeButton />
                <ChangeLocaleButton />
                {navbarContent.map((item) => {
                    translate = useTranslation(item)

                    return (
                        <NavbarItem
                            key={translate("itemName")}
                            itemName={translate("itemName")}
                            itemLink={item.link}
                        />
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar
