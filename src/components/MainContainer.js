import React, { useEffect } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../store/moviesSlice';

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies.nowPlayingMovies)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
            .then(res => res.json())
            .then(res=>dispatch(addNowPlayingMovies(res.results)))
            .catch(err => console.error(err));
    }, [])
   
    if(movies=== null) return;
    const mainMovie = movies?.[1];
    const {title, overview,id} = mainMovie;
    
    return (
        <div>
            <VideoTitle title={title} overview={overview}/>
            <VideoBackground movieID={id}/>
        </div>
    )
}

export default MainContainer;