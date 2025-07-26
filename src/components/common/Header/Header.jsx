import React, { useContext } from 'react'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { IconHeader } from './IconHeader'
import { SearchBar } from '../SearchBar'
import { AppContext } from '../../../context/MovieContext'

const Header = () => {

    const { showSearchBar } = useContext(AppContext)


return (
    <div className='fixed top-0 right-0 flex items-center justify-center flex-col w-[100dvw] z-50 '>
        <div className='header relative w-[100%] flex flex-col items-center justify-between  bg-black'>
            {/* gradient-bar */}
            <div className='w-[100%] flex md:flex-col lg:flex-row items-center justify-between lg:gap-0 pt-4 pb-6 md:pb-4 lg:pb-6  lg:px-[5%] xl:px-[10%] px-[10px]'>
                <Logo />
                <NavLink />
                <IconHeader />
            </div>
            <div className='gradient-bar'></div>
        </div>
        {
            showSearchBar && <SearchBar />
        }
    </div>
)
}

export default Header