import React from 'react'
import MovieCard from '../components/MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <h1 className='mx-4 py-3 text-3xl'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex m-2'>
                    {movies?.map((movie) => (
                        <MovieCard  key={movie.id} posterPath={movie?.poster_path} />
                    ))}
                </div>

            </div>
        </div>
    )
}
export default MovieList;