import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const MovieContextProvider = ({children}) => {

    const [showSearchBar, setShowSearchBar] = useState(false)
    const [isSmallerScreenMenu, setIsSmallerScreenMenu] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState('')

    const apiOption = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODJiZjk2Yzc5NzUzNjM5ZmMxMTUxZDBhMWU5M2Y0NCIsIm5iZiI6MTc0Mzg4MzMyNy45MDksInN1YiI6IjY3ZjE4YzNmMGM3OTFiZWI1N2FkNWU0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-YzI1Bn_lITOSwskULkEHIqnH2PnPKhTqQTNOTbWlmo'
            }
    }
    
    const value = {showSearchBar, setShowSearchBar, isSmallerScreenMenu, setIsSmallerScreenMenu, activeSubMenu, setActiveSubMenu, apiOption}

return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
)
}

