import React, { useEffect, useState } from 'react'
import { WatchBtn } from '../common/button/WatchBtn'
import { ThrillerBtn } from '../common/button/ThrillerBtn'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const HeroBanner = () => {

    const[movies, setMovies] = useState([])

    const backdrop_Url = "https://image.tmdb.org/t/p/original"
    const poster_Url = "https://image.tmdb.org/t/p/w500"

    const styles = {
        backgroundImage: `url(${backdrop_Url}${movies.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    }

    const apiOption = {
        method: 'GET',
        headers: {
            accept : 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODJiZjk2Yzc5NzUzNjM5ZmMxMTUxZDBhMWU5M2Y0NCIsIm5iZiI6MTc0Mzg4MzMyNy45MDksInN1YiI6IjY3ZjE4YzNmMGM3OTFiZWI1N2FkNWU0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-YzI1Bn_lITOSwskULkEHIqnH2PnPKhTqQTNOTbWlmo'
        }
    }

    
    useEffect(() => {

        // const fetchMoviesData = async () => {
        //     const response = await fetch('https://api.themoviedb.org/3/trending/movie/day', apiOption )
        //     try {
        //         if(response.ok) {
        //             const moviesData = await response.json()
        //             setMovies(moviesData.results[10])
                    
        //             // const runtime = await fetchMoviesRuntime(movies.id);
                    
        //             // const updatedMovies = { ...movies, runtime: runtime };
                    
        //             // setMovies(updatedMovies)
        //             // console.log(runtime)
        //             // console.log(updatedMovies)
        //             console.log(movies)
        //         }
        //     } catch (error) {
        //         console.log(error)
        //     }

        // }

        // fetchMoviesData();
        const fetchHeroMovies = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', apiOption)
            try {
                if (response) {
                    const responseData = response.data.results
                    const selectedMovies = responseData.slice(1, 12)
                    const randomMovieNumber = Math.floor( Math.random() * selectedMovies.length)
                    const fetchMovieDetails = await fetch(`https://api.themoviedb.org/3/movie/${responseData[randomMovieNumber].id}&append_to_response=videos,credits`, apiOption)
                    setMovies(await fetchMovieDetails.json())
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchHeroMovies();
    }, [])

return (
    <div className='mt-16 md:mt-24 '>
        <div className='h-[85dvh] md:h-[75dvh] flex items-end md:items-start' style={styles}>
            <div className='w-[100%] md:mt-4 md:w-[650px] h-fit md:ml-[5%] bg-black/50 backdrop-blur-lg rounded-xl p-6 shadow-lg '>
                <p className='text-xs text-white mb-2'>runtime: <span className='text-[#f59e0b] text-sm font-semibold'>{ movies.runtime}mins</span> </p>
                <div className="rating inline-flex flex-row items-center justify-center gap-2 mb-4">
                    <FaStar size={30} color='	#FFD700' />
                    {
                        movies?.vote_average !== undefined &&
                    (<p className='text-2xl text-white font-semibold'>{(movies.vote_average).toFixed(1)}</p>)
                    }
                </div>
                <h2 className='monserate text-2xl md:text-6xl font-semibold md:mb-4 mb-2 text-[#ef4444]'>{movies.title}</h2>
                <p className=' text-[#e00000] mb-2 font-semibold underline'>Release: { movies.release_date }</p>
                <p className='text-xs md:text-lg text-white'>{movies.overview}</p>
                <div className="btn flex items-center justify-start gap-4 mt-8">
                    <Link to={`${movies.homepage}`} target='_blank'>
                        <WatchBtn text='watch' />
                    </Link>
                    <Link to={`${movies.homepage}`} target='_blank'>
                        <ThrillerBtn text='thriller' />
                    </Link>
                    
                </div>
            </div>
        </div>

    </div>
)
}
