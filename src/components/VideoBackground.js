import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../store/moviesSlice';

const VideoBackground = ({ movieID }) => {

  const trailerVideo = useSelector((store) => store.movies.trailerVideo)
  const dispatch = useDispatch();

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/' + movieID + '/videos?language=en-US', API_OPTIONS)
      .then(res => res.json())
      .then(res => {
        const trailer = res.results?.find((trailer) => trailer.type === "Trailer")
        dispatch(addTrailerVideo(trailer))
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground;