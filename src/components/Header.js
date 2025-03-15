import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../store/userSlice';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearch } from '../store/gptSlice';
import { changeLanguage } from '../store/languageSlice';

const Header = () => {

  const user = useSelector((store => store.user));
  const showGPTSearch = useSelector((store)=>store.gpt.showGPTSearch)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    })
  }, [dispatch, navigate])

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }


  return (
    <div>
      <div className='absolute w-full px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={NETFLIX_LOGO} alt="logo" />
        {user && <div className='text-white p-2 flex'>
          <div className='m-2 p-2 font-bold'>{user.displayName}</div>
          {showGPTSearch?<select className='bg-gray-900 p-2 m-2 rounded-lg' onChange={(e)=>dispatch(changeLanguage(e.target.value))}>
            {SUPPORTED_LANGUAGES.map((language) => (
              <option value={language.identifier}>{language.name}</option>
            ))}
          </select>:""}
          <button className='bg-purple-600 p-2 rounded-lg m-2' onClick={() => dispatch(toggleGPTSearch())}>{showGPTSearch?"Home Page":"GPT Search"}</button>
          <button className='bg-red-600 p-2 m-2 rounded-lg' onClick={handleSignOut}>Sign Out</button>
        </div>}
      </div>


    </div>
  )
}
export default Header;