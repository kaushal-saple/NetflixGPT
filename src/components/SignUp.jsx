import React, { useState } from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'

const SignUp = () => {
  const [isSignIn,setIsSignIn] = useState(true);

  const toggleSignInform =()=>{
    setIsSignIn(!isSignIn);
  }



  return (
    <div className='relative'>
      <Header/>
      <img alt='bg-img' src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>

      <form className='absolute top-28 ml-2 p-15 rounded-md left-4/12 w-[450px]  bg-black/80' >
        <h1 className="text-4xl font-extrabold mb-3 text-white">
          {isSignIn? "Sign In":"Sign Up"}
        </h1>
        
        <div >
          {
          !isSignIn && (<><input type='text' placeholder='Enter name' className="p-4 my-3 w-full  bg-gray-950  placeholder:text-white text-white text-lg border-1 focus:ring-white rounded"></input>
          <br/></>)
          }

          <input type='text' placeholder='Email or mobile number' className="p-4 my-3 w-full  bg-gray-950 placeholder:text-white text-white text-lg border-1 focus:ring-white rounded"></input>
          <br />
          <input type='text' placeholder='Password' className="p-4 my-3 w-full bg-gray-950  text-white text-lg  placeholder:text-white focus:ring-white rounded border-1 border-white"></input>
          <br />
          <button className='p-4 my-3 w-full text-xl  placeholder:text-white text-white font-bold bg-red-600 rounded'>{isSignIn? "Sign In":"Sign Up"}</button>

          <p className='text-gray-400 cursor-pointer' onClick={toggleSignInform}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
          </p>
        </div>

      </form>
    </div>
  )
}

export default SignUp