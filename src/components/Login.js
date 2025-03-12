import React, {useState} from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleSignInToggle =()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt="back" />
            </div>
            <form className='bg-black text-white absolute p-12 w-3/12 mx-auto right-0 left-0 my-32 bg-opacity-80 rounded-lg'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm &&<input type="text" placeholder='Full Name' className='my-2 p-4 w-full rounded-lg bg-gray-600' />}
                <input type="email" placeholder="Enter Address" className='my-2 p-4 w-full rounded-lg bg-gray-600' />
                <input type="password" placeholder="Password" className='my-2 p-4 w-full rounded-lg bg-gray-600' />
                <button className='my-6 p-2 bg-red-600 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
                <p onClick={handleSignInToggle}className='my-4 cursor-pointer'>{isSignInForm?"New to Netflix? Sign up now":"Already registered? Sign in now"}</p>
            </form>
        </div>
    )
}

export default Login;