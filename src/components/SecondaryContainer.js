import React,{useEffect} from 'react'
import MovieList from './MovieList';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants'
import { addPopularMovies, addTopRatedMovies, addUpcomingMovies} from '../store/moviesSlice';

const SecondaryContainer = () => {

    const {nowPlayingMovies,popularMovies,topRatedMovies,upComingMovies} = useSelector((store) => store.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
            .then(res => res.json())
            .then(res => dispatch(addPopularMovies(res.results)))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
            .then(res => res.json())
            .then(res => dispatch(addTopRatedMovies(res.results)))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
            .then(res => res.json())
            .then(res => dispatch(addUpcomingMovies(res.results)))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className=' px-8 text-white bg-black '>
            <div className='-mt-60 z-20 relative '>
                <MovieList title="Now Playing" movies={nowPlayingMovies} />
                <MovieList title="Popular" movies={popularMovies} />
                <MovieList title="Top Rated" movies={topRatedMovies} />
                <MovieList title="Upcoming" movies={upComingMovies} />
            </div>
        </div>
    )
}
export default SecondaryContainer;