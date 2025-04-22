import React from 'react'
import Header from '../components/common/Header/Header'
import { HeroBanner } from '../components/homePage/HeroBanner'
import TrendingMovies from '../components/homePage/TrendingMovies'
import MovieSect from '../components/homePage/MovieSect'
import MovieTrailer from '../components/homePage/MovieTrailer'
import TvSeries from '../components/homePage/TvSeries'
import Genre from '../components/homePage/Genre'

const Home = () => {
return (
    <div>
        <Header />
        <HeroBanner />
        <TrendingMovies />
        <MovieSect />
        <MovieTrailer />
        <TvSeries />
        <Genre />
    </div>
)
}

export default Home