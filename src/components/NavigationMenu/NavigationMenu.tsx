import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"

type MenuTitleProps = {
    children: React.ReactNode
}

export const MenuTitle: React.FC<MenuTitleProps> = ({ children }) => {
    const { setIsMenuOpen } = useContext(NavigationMenuContext)

    return (
        <button
            type="button"
            className="focus:outline-none text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
            {children}
        </button>
    )
}

type MenuIconProps = {
    children: React.ReactNode
}

export const MenuIcon: React.FC<MenuIconProps> = ({ children }) => {
    const { setIsMenuOpen } = useContext(NavigationMenuContext)

    return (
        <button
            type="button"
            className="flex w-full items-center"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
            {children}
        </button>
    )
}

type MenuItemListProps = {
    children: React.ReactNode
}

export const MenuItemList: React.FC<MenuItemListProps> = ({ children }) => {
    const { isMenuOpen } = useContext(NavigationMenuContext)

    return (
        <div className="relative">
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {children}
                </div>
            )}
        </div>
    )
}

type MenuItemProps = {
    href?: string
    onSelect?: () => void
    children: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ href, onSelect, children }) => {
    const { setIsMenuOpen } = useContext(NavigationMenuContext)

    return (
        <a
            href={href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
            onClick={() => {
                setIsMenuOpen(false)
                onSelect?.()
            }}
        >
            {children}
        </a>
    )
}

type NavigationMenuContextType = {
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavigationMenuContext = createContext<NavigationMenuContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
})

export const NavigationMenu = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const memoizedContextValue = useMemo(
        () => ({
            isMenuOpen,
            setIsMenuOpen,
        }),
        [isMenuOpen, setIsMenuOpen]
    )

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const menuRef = useRef<HTMLDivElement>(null)

    return (
        <NavigationMenuContext.Provider value={memoizedContextValue}>
            <div ref={menuRef} className="w-full">
                {children}
            </div>
        </NavigationMenuContext.Provider>
    )
}
