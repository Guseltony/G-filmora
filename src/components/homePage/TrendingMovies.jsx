import React, { useContext, useEffect, useState } from 'react'
import { Title } from '../common/Title'
import axios from 'axios'
import { AppContext } from '../../context/MovieContext'
// import { IoStarSharp } from 'react-icons/io5'
import { MovieCard } from '../movies/MovieCard/MovieCard'
import { MovieTab } from '../common/MovieTab'

const TrendingMovies = () => {

    const trendingArray = ['all', 'movie', 'tv', 'person']
    const [activeTab, setActiveTab] = useState('all')
    const [trendingFilter, setTrendingFilter] = useState([])
    const [trendingAll, setTrendingAll] = useState([])
    const [trendingMovie, setTrendingMovie] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    // console.log(trendingTab)
    const {apiOption} = useContext(AppContext)

        // const poster_Url = "https://image.tmdb.org/t/p/w500"



    const handleTrendingTab = (tab) => {
        setActiveTab(tab)
        switch (tab) {
            case 'all':
                setTrendingFilter(trendingAll)
                break;
            case 'movie' :
                setTrendingFilter(trendingMovie)
                break;
            case 'tv': 
                setTrendingFilter(trendingTv)
                break
            default:
                break;
        }
    }

        const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        
        
        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/all/day', apiOption)
                if (response.status === 200) {
                    const trendingMovies = response?.data.results
                    const filteredMovies = trendingMovies.filter((movies) => movies.vote_average !== 0)
                    const shuffled = shuffleArray(filteredMovies)
                    setTrendingFilter(shuffled)
                    setTrendingAll(shuffled)
                    setTrendingMovie(shuffled.filter((movies) => movies.media_type === 'movie'))
                    setTrendingTv(shuffled.filter((movies) => movies.media_type === 'tv'))
                    console.log(trendingFilter)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchTrendingMovies();
    }, [])

return (
    <div>
        <div className='mt-8 px-[10px] lg:px-[5%] xl:px-[10%]'>
            <Title title='Trending Today'/>
            <div className='border-2 border-[#ef4444] rounded-full flex w-fit gap-2 lg:gap-4 mt-6'>
                {
                    trendingArray.map((t, index) => {
                        return <MovieTab key={index} activeTab={ activeTab} t={t} onclick={() => handleTrendingTab(t)} />
                    })
                }
            </div>
            <div className='flex items-center gap-6 lg:gap-10 mt-4 lg:mt-8 h-[350px] pl-4 lg:pl-8 overflow-x-auto scrollbar mb-10'>
                {
                    trendingFilter.map((movie) => {
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

export default TrendingMovies