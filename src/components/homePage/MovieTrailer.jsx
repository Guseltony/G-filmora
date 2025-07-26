import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/MovieContext'
import { Title } from '../common/Title'

const MovieTrailer = () => {

    const { apiOption } = useContext(AppContext)
    const [trailerKey, setTrailerKey] = useState(null)
    
    const getMovies = async () => {

        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', apiOption)
        console.log(response.data.results)

        const responseLength = response.data.results.length
        
        const randomNumber = Math.floor(Math.random() * (responseLength - 1))

        return response.data.results[randomNumber].id
    }
     


    useEffect(() => {          
        
        const fetchMovieTrailer = async () => {
            const id = await getMovies();
            console.log('id:', id)
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits`, apiOption)
            const movieVideos = response.data.videos.results
            const trailerVideo = movieVideos.filter((vid) => vid.type === 'Trailer')
            if (trailerVideo) {
                setTrailerKey(trailerVideo[trailerVideo.length - 1]?.key)
            }
            console.log('video', trailerVideo)
        }

        fetchMovieTrailer()

    }, [])



return (
    <div  className='mt-8 px-[10px] lg:px-[5%] xl:px-[10%] '>
        <Title title='Latest Trailer' />
        <div className='flex items-center justify-center'>
            <div className='md:flex items-center justify-center relative w-[100%] mt-8 h-[400px] lg:h-[650px] '>    
                <iframe
                    className=' border-0 outline-0 w-[100%] lg:w-[80%] h-[100%]'
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0&mute=1?modestbranding=1&controls=1&rel=0&fs=0&disablekb=1`}
                    allowFullScreen></iframe>
        </div>
        </div>

    </div>
)
}

export default MovieTrailer