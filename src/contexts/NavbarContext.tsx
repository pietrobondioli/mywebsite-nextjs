import React, { createContext, useState } from "react"

type NavbarContextType = {
    isNavbarOpen: boolean
    setIsNavbarOpen: (v: boolean) => void
}

const NavbarContext = createContext<NavbarContextType>({
    isNavbarOpen: false,
    setIsNavbarOpen: (v: boolean) => {},
})

const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    return (
        <NavbarContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarContext, NavbarContextProvider }
