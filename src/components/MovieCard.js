import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 m-2'>

      <img src={IMG_CDN_URL + posterPath} alt="NowPlayingMovies" />
    </div>
  )
}

export default MovieCard;