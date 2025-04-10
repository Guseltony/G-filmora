import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdDarkMode, MdOutlineFavorite } from 'react-icons/md'
import { AppContext, MovieContextProvider } from '../../context/MovieContext'
import { GiHamburgerMenu } from 'react-icons/gi'

export const IconHeader = () => {

    const { setShowSearchBar, setIsSmallerScreenMenu } = useContext(AppContext)
    
return (
    <div className='self-end'>
        <div className='flex gap-4 md:gap-8 items-center justify-center'>
            <FaSearch size={20} onClick={() => setShowSearchBar(prev => !prev)} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'/>
            <MdOutlineFavorite size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'/>
            <MdDarkMode size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'/>
            <GiHamburgerMenu size={20} className='md:hidden cursor-pointer hover:text-[#3b82fb] text-[#fff]' onClick={() => setIsSmallerScreenMenu(true)}/>
        </div>
    </div>
)
}
