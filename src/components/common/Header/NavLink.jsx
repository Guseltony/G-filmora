import React, {  useContext } from 'react'
import { IoIosCloseCircle, IoMdArrowDropdown } from 'react-icons/io'
import { Link, NavLink as NavAnchor } from 'react-router-dom'
import { AppContext } from '../../context/MovieContext'

export const NavLink = () => {

    const {activeSubMenu, setActiveSubMenu} = useContext(AppContext)


    
return (
    <div className='self-end md:self-center lg:self-end z-50'>
        <div >
            <ul className='hidden md:flex flex-row items-center justify-center text-white lg:gap-12 md:gap-8'>
                {/* Home */}
                <NavAnchor className='navAnchor relative' to={'/'}>
                    <li className=' text-white text-base capitalize font-bold z-30  '>Home</li>
                </NavAnchor>
                
                {/* Movies Links */}
                <div className='relative group '>
                    <div className='flex items-center justify-center gap-2'>
                        <NavAnchor className='navAnchor relative group ' to={'/movies'}>
                            <li className=' inline-block text-base capitalize font-bold  text-white z-30 ' >
                                Movies
                            </li>
                        </NavAnchor>
                        <IoMdArrowDropdown size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'/>
                    </div>
                    <div className='hidden dropdown_menu group-hover:flex flex-col justify-center  absolute w-[200px] top-6 -left-[100%] bg-[#000] pt-8 pb-4 px-6 gap-4'>
                        
                        <Link to='/movies/popular' className={`${activeSubMenu === 'popular' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('popular')}>Popular </Link>

                        <Link to='/movies/now-playing' className={`${activeSubMenu === 'nowplaying' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('nowplaying')}>Now Playing</Link>

                        <Link to='/movies/upcoming' className={`${activeSubMenu === 'upcomingmovies' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('upcomingmovies')}>Upcoming</Link>

                        <Link to='/movies/top-rated' className={`${activeSubMenu === 'toprated' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('toprated')}>Top Rated</Link>
                    </div>

                </div>

                {/* Series Links */}
                <div className='relative group'>
                    <div className='flex  items-center justify-center gap-2'>
                        <NavAnchor className='navAnchor relative' to={'/series'}>
                            <li className='inline-block  text-white text-base capitalize font-bold z-30 '>
                                Series
                            </li>
                        </NavAnchor>
                        <IoMdArrowDropdown size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'/>
                    </div>

                    <div className='hidden dropdown_menu group-hover:flex flex-col justify-center absolute w-[200px] top-6 -left-[100%] bg-[#000] pt-8 pb-4 px-6 gap-4'>
                        <Link to='/series/ongoing' className={`${activeSubMenu === 'ongoing' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('ongoing')}>Ongoing</Link>

                        <Link to='/series/upcoming' className={`${activeSubMenu === 'upcomingseries' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('upcomingseries')}>Upcoming</Link>

                        <Link to='/series/completed' className={`${activeSubMenu === 'completed' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('completed')}>Completed</Link>
                    </div>

                </div>
            
                {/* TV Shows Link */}
                <div className='relative group '>
                    <div className='flex  items-center md:justify-center gap-2'>
                        <NavAnchor className='navAnchor relative' to={'/tv-shows'} >
                            <li className='  text-white text-base capitalize font-bold z-30  '>
                                Tv-Shows
                            </li>
                        </NavAnchor>
                        <IoMdArrowDropdown size={20} className='cursor-pointer hover:text-[#3b82fb] text-[#fff]'/>
                    </div>
                    <div className='hidden dropdown_menu group-hover:flex flex-col justify-center absolute w-[200px] top-6 -left-[50%] bg-[#000] pt-8 pb-4 px-6 gap-4'>
                        <Link to='/tv-shows/popular' className={`${activeSubMenu === 'populartv' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('populartv')}>Popular</Link>

                        <Link to='/tv-shows/airing' className={`${activeSubMenu === 'airing' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('airing')}>Airing Today</Link>

                        <Link to='/tv-shows/on' className={`${activeSubMenu === 'ontv' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('ontv')}>On Tv</Link>

                        <Link to='tv-shows/top-rated' className={`${activeSubMenu === 'topratedshow' ? 'px-4 py-2 border-b-2 border-[#ef4444] bg-[#6b7280]' : ''} mt-2 border-[#ef4444] hover:bg-[#6b7280] hover:px-4 hover:py-2 hover:border-b-2 transition-all`} onClick={() => setActiveSubMenu('topratedshow')}>Top Rated</Link>
                    </div>

                </div>

                {/* about */}
                <NavAnchor className='navAnchor relative w-fit' to={'/about'} >
                    <li className='inline-block  text-white text-base capitalize font-bold z-30 '>
                        About
                    </li>
                </NavAnchor>

                {/* contact */}
                <NavAnchor className='navAnchor relative w-fit' to={'/contact'} >
                    <li className='inline-block  text-white text-base capitalize font-bold z-30  '>
                        Contact
                    </li>
                </NavAnchor>
            </ul>
        </div>
    </div>
)
}
