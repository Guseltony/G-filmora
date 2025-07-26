import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/MovieContext'
import axios from 'axios'
import { Title } from '../common/Title'
import { MovieTab } from '../common/MovieTab'
import { MovieCard } from '../movies/MovieCard/MovieCard'

const MovieSect = () => {

    const moviesArray = ['playing', 'popular', 'rated', 'upcoming']
    const [activeTab, setActiveTab] = useState('playing')
    const [movieFilter, setMovieFilter] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])

    const {apiOption} = useContext(AppContext)

        const handleMovieTab = (tab) => {
        setActiveTab(tab)
        switch (tab) {
            case 'playing':
                setMovieFilter(nowPlaying)
                break;
            case 'popular' :
                setMovieFilter(popular)
                break;
            case 'rated': 
                setMovieFilter(topRated)
                break
            case 'upcoming':
                setMovieFilter(upcoming)
                break
            default:
                break;
        }
    }

    //     const shuffleArray = (array) => {
    //     const shuffled = [...array];
    //     for (let i = shuffled.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    //     }
    //     return shuffled;
    // };

    useEffect(() => {
        const fetchMovies = async () => { 
            try {
                const playingResponse = await axios.get('https://api.themoviedb.org/3/movie/now_playing', apiOption)
                const popularResponse = await axios.get('https://api.themoviedb.org/3/movie/popular', apiOption)
                const ratedResponse = await axios.get('https://api.themoviedb.org/3/movie/top_rated', apiOption)
                const upcomingResponse = await axios.get('https://api.themoviedb.org/3/movie/upcoming', apiOption)

                console.log(playingResponse)
                if (playingResponse.status === 200) {
                    setNowPlaying(playingResponse?.data.results)
                    setMovieFilter(playingResponse?.data.results)
                    // const shuffled = shuffleArray(movieFilter)
                }
                if (popularResponse.status === 200) {
                    setPopular(popularResponse?.data.results)
                    // const shuffled = shuffleArray(movieFilter)
                }
                if (ratedResponse.status === 200) {
                    setTopRated(ratedResponse?.data.results)
                    // const shuffled = shuffleArray(movieFilter)
                }
                if (upcomingResponse.status === 200) {
                    setUpcoming(upcomingResponse?.data.results)
                    // const shuffled = shuffleArray(movieFilter)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchMovies();
    }, [])

return (
    <div>
        <div className="mt-8 px-[5px] lg:px-[5%] xl:px-[10%] overflow-hidden">
            <Title title='Today Movies' />
            <div className='border-2 border-[#ef4444] rounded-full flex gap-2 lg:gap-4 mt-6 overflow-x-auto w-[100%] lg:w-fit scrollbar md:pr-0 '>
                {
                    moviesArray.map((m, index) => {
                        return <MovieTab key={index} activeTab={ activeTab} t={m} onclick={() => handleMovieTab(m)}/>
                    })
                }
            </div>
            <div className='flex items-center gap-4 lg:gap-10 overflow-x-auto mt-4 lg:mt-8 h-[350px] pl-4 lg:pl-8 scrollbar mb-10'>
                {
                    movieFilter.map((movie) => {
                        return (
                            <div key={movie.id} className='transition-all duration-500 ease-in-out'>
                                <MovieCard {...movie} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
)
}

export default MovieSect