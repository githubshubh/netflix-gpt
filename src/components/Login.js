import React, { useRef, useState } from 'react'
import Header from './Header';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { LOGIN_BACKGROUND } from '../utils/constants'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState(null);
    const email = useRef(null);
    const pass = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const validateFields = (e, p) => {
        const emailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(e);
        const passvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(p);
        if (!emailValid) return "Enter Valid Address";
        if (!passvalid) return "Enter Valid Password";
        return null;
    }

    const handleSignInToggle = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        const errorMsg = validateFields(email.current.value, pass.current.value);
        setError(errorMsg);

        if (errorMsg) return;

        if (!isSignInForm)
            createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, displayName, email, } = auth.currentUser;
                        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
                    }).catch((error) => {
                        setError(error)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + errorMessage);
                });
        else {
            signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + errorMessage);
                });
        }

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={LOGIN_BACKGROUND} alt="back" />
            </div>
            <form onSubmit={handleButtonClick} className='bg-black text-white absolute p-12 w-3/12 mx-auto right-0 left-0 my-32 bg-opacity-80 rounded-lg'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='my-2 p-4 w-full rounded-lg bg-gray-600' />}
                <input ref={email} type="text" placeholder="Enter Address" className='my-2 p-4 w-full rounded-lg bg-gray-600' />
                <input ref={pass} type="password" placeholder="Password" className='my-2 p-4 w-full rounded-lg bg-gray-600' />
                <button className='my-6 p-2 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <span className='text-red-500 font-bold'>{error}</span>
                <p onClick={handleSignInToggle} className='my-4 cursor-pointer'>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign in now"}</p>
            </form>
        </div>
    )
}

export default Login;