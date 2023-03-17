import { useEffect, useState } from "react"

import { debounce } from "@/utils/js-utils"

/**
 * Hook to determine if the window is mobile width
 * @param mobileWidth - The width at which the window is considered mobile
 * @returns {object} - An object containing the isMobile boolean
 * @example
 * const isMobile = useIsMobile()
 * if (isMobile) {
 *    // Do something
 * }
 */
export const useIsMobile = (mobileWidth = 768): { isMobile: boolean } => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth)

    useEffect(() => {
        const updateSize = (): void => {
            setIsMobile(window.innerWidth < mobileWidth)
        }
        window.addEventListener(`resize`, debounce(updateSize, 100))

        return (): void => window.removeEventListener(`resize`, updateSize)
    }, [mobileWidth])

    return { isMobile }
}
