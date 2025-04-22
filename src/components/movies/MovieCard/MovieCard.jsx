import React from 'react'
import { IoStarSharp } from 'react-icons/io5'


export const MovieCard = ({title, poster_path, name, media_type, vote_average}) => {

    const poster_Url = "https://image.tmdb.org/t/p/w500"

return (
    <div className='relative h-60 lg:h-74 w-38 lg:w-44 flex-shrink-0 rounded-lg'>
        <div className="circle -top-6 -left-4 flex items-center justify-center w-[40px] h-[40px] lg:w-[56px] lg:h-[56px]">
            <div className='w-[38px] h-[38px] lg:w-[52px] lg:h-[52px] rounded-full bg-black flex items-center justify-center px-1 py-1'>
                <IoStarSharp size={28} color='#FFD700'/>
                <p className='text-xs self-end pr-1'>{ (vote_average).toFixed(1)}</p>
            </div>
        </div>
        <div>
            <img src={`${poster_Url}${poster_path}`} alt={title} className='w-[100%] lg:h-64 h-60  rounded-lg' />
        </div>
        {
        media_type ?
            <div className="details text-center text-sm mt-2">
            {
                media_type === 'movie' ? 
                <h2>{title}</h2> : <h2>{name}</h2>
            }
            </div> :
            <div className="details text-center text-sm mt-2">
            <h2>{title}</h2> 
            </div>
        }
    </div>
)
}
