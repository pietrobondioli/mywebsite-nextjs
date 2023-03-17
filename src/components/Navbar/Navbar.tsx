// React/Next Components
import React from "react"
import { useTranslation } from "next-i18next"

import { useIsMobile } from "@/hooks/useIsMobile"

import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

export const Navbar: React.FC = () => {
    const { t } = useTranslation(`common`)
    const { isMobile } = useIsMobile()

    const navbarItems = t(`navbar`, { returnObjects: true })

    return (
        <div className="bg-white-700 dark:bg-secondary shadow-md text-black dark:text-white">
            {isMobile ? (
                <MobileNavbar items={navbarItems} />
            ) : (
                <DesktopNavbar items={navbarItems} />
            )}
        </div>
    )
}

export default Navbar
