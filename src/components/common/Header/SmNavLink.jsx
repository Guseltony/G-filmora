import React, {  useState, useContext } from 'react'
import { IoIosCloseCircle, IoMdArrowDropdown } from 'react-icons/io'
import { Link, NavLink as NavAnchor } from 'react-router-dom'
import { AppContext } from '../../context/MovieContext'





export const SmNavLink = () => {
    const [activeSubMenu, setActiveSubMenu] = useState('')

    const [showDropMenu, setShowDropMenu] = useState('')
    const [isShowDropMenu, setIsShowDropMenu] = useState(false)
    const {isSmallerScreenMenu, setIsSmallerScreenMenu} = useContext(AppContext)

return (
    <div className='md:hidden bg-[#ef4444]  absolute top-0 left-0 w-[100dvw] h-[100dvh]'>
        <ul className='flex flex-col text-white gap-6 mt-20 ml-16'>
            <IoIosCloseCircle className='md:hidden absolute right-10 top-4' size={30} onClick={() => setIsSmallerScreenMenu(false)}/>
                {/* Home */}
                <NavAnchor className='w-fit navAnchor relative' to={'/'}>
                    <li className=' text-white text-base capitalize font-bold'>Home</li>
                </NavAnchor>
                
                {/* Movies Links */}
                <div className='relative'>
                    <div className='flex gap-10'>
                        <NavAnchor className='navAnchor relative group ' to={'/movies'}>
                            <li className=' inline-block text-base capitalize font-bold '>
                                Movies
                            </li>
                        </NavAnchor>
                        <IoMdArrowDropdown size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]' onClick={() => {setShowDropMenu('movies');setIsShowDropMenu(prev => !prev)}}/>
                    </div>

                    {/* smaller screen */}
                    <div>
                        { isShowDropMenu && showDropMenu === 'movies' && <div className='flex flex-col justify-center bg-[#000] pt-8 pb-4 px-6 gap-4'>
                            
                            <Link to='/movies/popular' className={`${activeSubMenu === 'popular' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('popular')}>Popular </Link>

                            <Link to='/movies/now-playing' className={`${activeSubMenu === 'nowplaying' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('nowplaying')}>Now Playing</Link>

                            <Link to='/movies/upcoming' className={`${activeSubMenu === 'upcomingmovies' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('upcomingmovies')}>Upcoming</Link>

                            <Link to='/movies/top-rated' className={`${activeSubMenu === 'toprated' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('toprated')}>Top Rated</Link>
                        </div>}
                    </div>

                </div>

                {/* Series Links */}
                <div className='relative'>
                    <div className='flex gap-10'>
                        <NavAnchor className='navAnchor relative' to={'/series'}>
                            <li className='inline-block text-base capitalize font-bold'>
                                Series
                            </li>
                        </NavAnchor>
                        <IoMdArrowDropdown size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'onClick={() => {setShowDropMenu('series');setIsShowDropMenu(prev => !prev)}}/>
                    </div>

                    {/* smaller screen */}
                    <div className='md-hidden'>    
                        {isShowDropMenu && showDropMenu === 'series' && <div className='flex flex-col justify-center bg-[#000] pt-8 pb-4 px-6 gap-4'>
                            <Link to='/series/ongoing' className={`${activeSubMenu === 'ongoing' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('ongoing')}>Ongoing</Link>

                            <Link to='/series/upcoming' className={`${activeSubMenu === 'upcomingseries' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('upcomingseries')}>Upcoming</Link>

                            <Link to='/series/completed' className={`${activeSubMenu === 'completed' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('completed')}>Completed</Link>
                        </div>}
                    </div>
                </div>
            
                {/* TV Shows Link */}
                <div className='relative group '>
                    <div className='flex gap-2'>
                        <NavAnchor className='navAnchor relative' to={'/tv-shows'} >
                            <li className=' inline-block text-base capitalize font-bold'>
                                Tv-Shows
                            </li>
                        </NavAnchor>
                        <IoMdArrowDropdown size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'onClick={() => {setShowDropMenu('tvShows');setIsShowDropMenu(prev => !prev)}}/>
                    </div>

                    {/* smaller screen */}
                    <div className='md-hidden'>
                        {isShowDropMenu && showDropMenu === 'tvShows' && <div className='flex flex-col justify-center  bg-[#000] pt-8 pb-4 px-6 gap-4'>
                            <Link to='/tv-shows/popular' className={`${activeSubMenu === 'populartv' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('populartv')}>Popular</Link>

                            <Link to='/tv-shows/airing' className={`${activeSubMenu === 'airing' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('airing')}>Airing Today</Link>

                            <Link to='/tv-shows/on' className={`${activeSubMenu === 'ontv' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('ontv')}>On Tv</Link>

                            <Link to='tv-shows/top-rated' className={`${activeSubMenu === 'toprated' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('toprated')}>Top Rated</Link>
                        </div>}
                    </div>
                </div>

                {/* about */}
                <NavAnchor className='navAnchor relative w-fit' to={'/about'} >
                    <li className='inline-block text-base capitalize font-bold'>
                        About
                    </li>
                </NavAnchor>

                {/* contact */}
                <NavAnchor className='navAnchor relative w-fit' to={'/contact'} >
                    <li className='inline-block text-base capitalize font-bold'>
                        Contact
                    </li>
                </NavAnchor>
            </ul>
    </div>
)
}
