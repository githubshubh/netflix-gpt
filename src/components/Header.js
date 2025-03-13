import React , { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../store/userSlice';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {

  const user = useSelector((store => store.user));
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
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }


  return (
    <div>
      <div className='absolute w-full px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={NETFLIX_LOGO} alt="logo" />
        {user && <div className='text-white m-2 p-2 flex'>
          <div className='m-2 p-2 font-bold'>{user.displayName}</div>
          <button className='bg-red-600 px-2 rounded-lg' onClick={handleSignOut}>Sign Out</button>
        </div>}
      </div>


    </div>
  )
}
export default Header;