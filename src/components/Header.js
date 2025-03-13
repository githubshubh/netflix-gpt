import React , { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../store/userSlice';
import { onAuthStateChanged, signOut } from "firebase/auth";

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
        <img className='w-48' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && <div className='text-white m-2 p-2 flex'>
          <div className='m-2 p-2 font-bold'>{user.displayName}</div>
          <button className='bg-red-600 px-2 rounded-lg' onClick={handleSignOut}>Sign Out</button>
        </div>}
      </div>


    </div>
  )
}
export default Header;