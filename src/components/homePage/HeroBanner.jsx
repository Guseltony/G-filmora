import React, { useContext, useEffect, useState } from 'react'
import { WatchBtn } from '../common/button/WatchBtn'
import { ThrillerBtn } from '../common/button/ThrillerBtn'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/MovieContext'


export const HeroBanner = () => {
    
    const [movies, setMovies] = useState(null)
    const [thrillerKey, setThrillerKey] = useState(null)

    const {apiOption} = useContext(AppContext)
    
    const backdrop_Url = "https://image.tmdb.org/t/p/original"
    // const poster_Url = "https://image.tmdb.org/t/p/w500"

    const styles = {
        backgroundImage: movies?.backdrop_path 
            ? `linear-gradient(to bottom,#ef444440,  rgba(0,0,0,0.4), rgba(0,0,0,0.3), #CCFF0050), url(${backdrop_Url}${movies.backdrop_path})`
            : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    };




    useEffect(() => {
        const fetchHeroBanner = async () => {
            try {
                const trendingResponse = await axios.get(
                'https://api.themoviedb.org/3/trending/movie/day?include_video=true', 
                apiOption
                );
            const trendingMovies = trendingResponse.data.results.slice(0, 12);
            const randomMovie = trendingMovies[Math.floor(Math.random() * (trendingMovies.length + 1))];
            const detailsResponse = await axios.get(
                `https://api.themoviedb.org/3/movie/${randomMovie?.id}?append_to_response=videos,credits`,
                apiOption
            );
            setMovies(detailsResponse.data);
            if (detailsResponse.data.videos?.results) {
                    const videosResult = detailsResponse.data.videos.results;
                    const filterThriller = videosResult.filter(video => video.type === "Trailer");
                    if (filterThriller.length > 0) {
                        setThrillerKey(filterThriller[0].key);
                    }
                }
        
            } catch (error) {
            console.error("Fetch error:", error);
            }
        };
        
        fetchHeroBanner();
}, []); 

    
return (
    <div className='mt-16 md:mt-24 overflow-x-hidden'>
        {
            movies &&
            (<div className='h-[85dvh] md:h-[75dvh] flex items-end justify-center md:justify-start' style={styles}>
            
            <div className='w-[96%] mb-4 md:mb-8 md:w-[700px] h-fit ml-0 md:ml-[5%] bg-black/60 md:bg-black/30 backdrop-blur-lg px-4 md:px-6 rounded-xl md:py-6 py-4 shadow-lg border-1 border-amber-200 '>
                <p className='text-xs text-white mb-2'>runtime: <span className='text-[#f59e0b] text-sm font-semibold'>{ movies.runtime}mins</span> </p>
                    {
                        movies?.vote_average !== undefined || movies?.vote_average !== 0.0 &&
                <div className="rating inline-flex flex-row items-center justify-center gap-2 mb-4">
                        <FaStar className='md:text-[2em] text-[1em]' color='	#FFD700' />
                    <p className='text-sm md:text-2xl text-white font-semibold'>{(movies.vote_average).toFixed(1)}</p>
                </div>
                    }
                <h2 className='roboto text-2xl md:text-6xl font-semibold md:font-bold md:mb-4 mb-2 text-[#ef4444] movie_title'>{movies.title}</h2>
                <p className='text-xs md:text-base text-[#CCFF00] mb-2 font-semibold underline'>Release: { movies.release_date }</p>
                <p className='text-sm md:text-base text-white line-clamp-2 md:line-clamp-none'>{movies.overview}</p>
                <div className="btn flex items-center justify-start gap-4 mt-4 md:mt-8">
                    <Link to={`${movies.homepage}`} target='_blank'>
                        <WatchBtn text='watch' />
                    </Link>
                    <Link to={`https://www.youtube.com/watch?v=${thrillerKey}`}  target='_blank'>
                            <ThrillerBtn text='thriller' />
                    </Link>
                </div>
            </div>
            </div>)
        }

    </div>
)
}
