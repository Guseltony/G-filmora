import React, { useContext } from 'react'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { IconHeader } from './IconHeader'
import { SearchBar } from '../SearchBar'
import { AppContext, MovieContextProvider } from '../../context/MovieContext'
import { SmNavLink } from './SmNavLink'

const Header = () => {

    const { showSearchBar, isSmallerScreenMenu } = useContext(AppContext)
    console.log(showSearchBar)


return (
    <div className='fixed top-0 right-0 flex items-center justify-center flex-col w-[100vw] '>
        <div className='header relative w-[100%] flex items-center justify-between  bg-black pt-4 pb-6 md:px-[10%] px-[10px] '>
            <Logo />
            {isSmallerScreenMenu ? <SmNavLink /> : <NavLink />}
            <IconHeader />
        </div>
        {
            showSearchBar && <SearchBar />
        }
    </div>
)
}

export default Header