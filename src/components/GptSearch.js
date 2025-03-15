import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchContainer from './GptSearchContainer';
import { LOGIN_BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={LOGIN_BACKGROUND} alt="back" />
      </div>
      <GptSearchBar />
      <GptSearchContainer />
    </div>
  )
}
export default GptSearch;