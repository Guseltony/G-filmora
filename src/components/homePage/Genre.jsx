import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/MovieContext'
import axios from 'axios'
import { Title } from '../common/Title'
import { MovieTab } from '../common/MovieTab'
import { MovieCard } from '../movies/MovieCard/MovieCard'

const Genre = () => {

    const genreArray = ['action', 'romance', 'drama', 'animation', 'music', 'crime']
    const [activeTab,setActiveTab] = useState('action')
    const [genreFilter, setGenreFilter] = useState([])
    const [romanceGenre, setRomanceGenre] = useState([])
    const [actionGenre, setActionGenre] = useState([])
    const [dramaGenre, setDramaGenre] = useState([])
    const [musicGenre, setMusicGenre] = useState([])
    const [crimeGenre, setCrimeGenre] = useState([])
    const [animationGenre, setAnimationGenre] = useState([])

    const { apiOption } = useContext(AppContext)

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        switch (tab)
        
        {
            case 'action':
                setGenreFilter(actionGenre)
                break;
            
            case 'romance':
                setGenreFilter(romanceGenre)
                break;
            
            case 'drama':
                setGenreFilter(dramaGenre)
                break;
            
            case 'music':
                setGenreFilter(musicGenre)
                break;
                
            case 'crime':
                setGenreFilter(crimeGenre)
                break;
            
            case 'animation':
                setGenreFilter(animationGenre)
                break;
        
            default:
                break;
        }
    }
    
    useEffect(() => {

        const fetchMoviesByGenre = async () => {
            try {
                // romance genre
                const romanceGenreResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${10749}&sort_by=popularity`, apiOption)
                if (romanceGenreResponse) setRomanceGenre(romanceGenreResponse?.data.results)
                
                // action genre
                const actionGenreResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${28}&sort_by=popularity`, apiOption)
                if (actionGenreResponse) {
                    setGenreFilter(actionGenreResponse?.data.results)
                    setActionGenre(actionGenreResponse?.data.results)
                }

                // drama genre
                const dramaGenreResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${18}&sort_by=popularity`, apiOption)
                if (dramaGenreResponse) {
                    setGenreFilter(dramaGenreResponse?.data.results)
                    setDramaGenre(dramaGenreResponse?.data.results)
                }

                // music genre
                const musicGenreResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${10402}&sort_by=popularity`, apiOption)
                if (musicGenreResponse) {
                    setGenreFilter(musicGenreResponse?.data.results)
                    setMusicGenre(musicGenreResponse?.data.results)
                }

                // animation genre
                const animationGenreResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${16}&sort_by=popularity`, apiOption)
                if (animationGenreResponse) {
                    setGenreFilter(animationGenreResponse?.data.results)
                    setAnimationGenre(animationGenreResponse?.data.results)
                }

                // crime genre
                const crimeGenreResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${80}&sort_by=popularity`, apiOption)
                if (crimeGenreResponse) {
                    setGenreFilter(crimeGenreResponse?.data.results)
                    setCrimeGenre(crimeGenreResponse?.data.results)
                }


            } catch (error) {
                console.log(error)
            }
        }

        fetchMoviesByGenre();
    }, [])
    
return (
    <div>
        <div className='mt-8 px-[5px] lg:px-[5%] xl:px-[10%]'>
            <Title title='Discover'/>
            <div className='border-2 border-[#ef4444] rounded-full flex gap-2 lg:gap-4 mt-6 overflow-x-auto w-[100%] lg:w-fit scrollbar md:pr-0 '>
                {
                    genreArray.map((t, index) => {
                    return <MovieTab key={index} activeTab={ activeTab} t={t} onclick={() => handleTabChange(t)} />
                    })
                }
            </div>
            <div className='flex items-center gap-4 lg:gap-10 mt-4 lg:mt-8 h-[350px] pl-4 lg:pl-8 overflow-x-auto scrollbar mb-10'>
                {
                    genreFilter.map((movie) => {
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

export default Genre