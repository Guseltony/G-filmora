import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/MovieContext'
import axios from 'axios'
import { Title } from '../common/Title'
import { MovieTab } from '../common/MovieTab'
import { MovieCard } from '../movies/MovieCard/MovieCard'

const TvSeries = () => {

        const tvSeriesArray = ['today', 'airing', 'rated', 'popular']
        const [activeTab, setActiveTab] = useState('today')
        const [tvSeriesFilter, setTvSeriesFilter] = useState([])
        const [today, setToday] = useState([])
        const [onTheAir, setOnTheAir] = useState([])
        const [rated, setRated] = useState([])
        const [popular, setPopular] = useState([])

    const {apiOption} = useContext(AppContext)

    const handleMovieTab = (tab) => {
        setActiveTab(tab)
        switch (tab) {
            case 'today':
                setTvSeriesFilter(today)
                break;
            case 'popular' :
                setTvSeriesFilter(popular)
                break;
            case 'rated': 
                setTvSeriesFilter(rated)
                break
            case 'airing':
                setTvSeriesFilter(onTheAir)
                break
            default:
                break;
        }
    }
            
    useEffect(() => {
        const fetchMovies = async () => { 
            try {
                const todayResponse = await axios.get('https://api.themoviedb.org/3/tv/airing_today', apiOption)
                const onTheAirResponse = await axios.get('https://api.themoviedb.org/3/tv/on_the_air', apiOption)
                const ratedResponse = await axios.get('https://api.themoviedb.org/3/tv/top_rated', apiOption)
                const popularResponse = await axios.get('https://api.themoviedb.org/3/tv/popular', apiOption)

                console.log(todayResponse)
                if (todayResponse.status === 200) {
                    setToday(todayResponse?.data.results)
                    setTvSeriesFilter(todayResponse?.data.results)
                    // const shuffled = shuffleArray(movieFilter)
                }
                if (popularResponse.status === 200) {
                    setPopular(popularResponse?.data.results)
                    // const shuffled = shuffleArray(movieFilter)
                }
                if (ratedResponse.status === 200) {
                    setRated(ratedResponse?.data.results)
                    // const shuffled = shuffleArray(movieFilter)
                }
                if (onTheAirResponse.status === 200) {
                    setOnTheAir(onTheAirResponse?.data.results)
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
            <Title title='TV-Series' />
            <div className='border-2 border-[#ef4444] rounded-full flex gap-2 lg:gap-4 mt-6 overflow-x-auto w-[100%] lg:w-fit scrollbar md:pr-0 '>
                {
                    tvSeriesArray.map((m, index) => {return <MovieTab key={index} activeTab={ activeTab} t={m} onclick={() => handleMovieTab(m)}/>})
                }
            </div>
            <div className='flex items-center gap-4 lg:gap-10 overflow-x-auto mt-4 lg:mt-8 h-[350px] pl-4 lg:pl-8 scrollbar mb-10'>
                {
                    tvSeriesFilter.map((movie) =>
                    {
                        return (<div key={movie.id} className='transition-all duration-500 ease-in-out'>
                            <MovieCard {...movie} />
                    </div>)
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default TvSeries