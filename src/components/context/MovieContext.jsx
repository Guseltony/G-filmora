import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const MovieContextProvider = ({children}) => {

    const [showSearchBar, setShowSearchBar] = useState(false)
    const [isSmallerScreenMenu, setIsSmallerScreenMenu] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState('')
    
    const value = {showSearchBar, setShowSearchBar, isSmallerScreenMenu, setIsSmallerScreenMenu, activeSubMenu, setActiveSubMenu}

return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
)
}

