import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const selectedLanguage = useSelector((store=>store.language.selectedLanguage))
    return (
        <div className='pt-[10%] flex justify-center '>
            <form className='bg-black w-1/2 grid grid-cols-12'>
                <input type="text" className="p-4 m-4 col-span-9 rounded-lg"  placeholder={lang[selectedLanguage].gptSearchPlaceHolder} />
                <button className='bg-red-600 text-white rounded-lg py-2 px-4 p-4 m-4 col-span-3'>{lang[selectedLanguage].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;