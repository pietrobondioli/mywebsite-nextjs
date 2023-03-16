import React from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

import { useThemeState } from "@/store/theme-store"

export type ThemeWrapperProps = {
    children: React.ReactNode
}

const ThemeComp: React.FC<ThemeWrapperProps> = (props) => {
    const router = useRouter()
    const { theme } = useThemeState()
    const { children } = props

    const themeClass = router.isReady ? theme : ``
    const bgClass =
        themeClass &&
        (themeClass === `dark` ? `bg-secondary-dark text-white` : `bg-white text-black`)

    return <div className={`${themeClass} ${bgClass}`}>{children}</div>
}

/**
 * This is needed to prevent mismatch between server and client side rendering.
 * See:
 * @link https://github.com/pmndrs/zustand/issues/324#issuecomment-1031392610
 * @link https://github.com/pmndrs/zustand/issues/324
 * @link https://github.com/pmndrs/zustand/issues/938
 * @link https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 */
export const Theme = dynamic(() => Promise.resolve(ThemeComp), {
    ssr: false,
})
