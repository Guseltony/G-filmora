import React from 'react'
import { IoStarSharp } from 'react-icons/io5'


export const MovieCard = ({title, poster_path, name, media_type, vote_average}) => {

    const poster_Url = "https://image.tmdb.org/t/p/w500"

return (
    <div className='relative h-74 lg:h-84 w-42 lg:w-52 flex-shrink-0 rounded-lg'>
        <div className="circle top-0 right-0 flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px]">
            <div className='w-[38px] h-[38px] lg:w-[44px] lg:h-[44px] rounded-full bg-black flex items-end px-1.5 py-1.5'>
                <p className='text-xs '>{ (vote_average).toFixed(1)}</p>
                <IoStarSharp size={20} color='#FFD700' className='self-start'/>
            </div>
        </div>
        <div>
            <img src={`${poster_Url}${poster_path}`} alt={title} className='w-[100%] lg:h-68 h-60  rounded-lg' />
        </div>
        {
        media_type ?
            <div className="details text-center text-sm md:text-base mt-2">
            {
                media_type === 'movie' ? 
                <h2>{title}</h2> : <h2>{name}</h2>
            }
            </div> :
            <div className="details text-center text-sm md:text-base mt-2">
            <h2>{title}</h2> 
            </div>
        }
    </div>
)
}
