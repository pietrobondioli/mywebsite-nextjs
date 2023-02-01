import React from "react"

const NavbarContext = React.createContext()

const NavbarContextProvider = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false)

    return (
        <NavbarContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarContext, NavbarContextProvider }
