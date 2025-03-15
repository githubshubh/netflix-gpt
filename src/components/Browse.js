import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGPTSearch = useSelector((store)=>store.gpt.showGPTSearch)
  return (
    <div>
      <Header />
      {showGPTSearch ?
        <GptSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }


    </div>
  )
}

export default Browse;