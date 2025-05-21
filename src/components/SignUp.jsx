import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';



const SignUp = () => {
  const dispatch = useDispatch();
  const [isSignIn,setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

    //reference to email & passwprd input box
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);



  const toggleSignInform =()=>{
    setIsSignIn(!isSignIn);
  }



  const handleClickButton = ()=>{
    // checkValidation()
    // console.log(email.current.value)
    // console.log(Password.current.value)
    const message = checkValidation(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message){
      return
    }

    //sign un authentication
    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/88095614?v=4"
        }).then(() => {
          // Profile updated!

          // update the store again to resolve profile photo issue
          const {uid, email ,displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error)
        });
       

      

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode, "+ " ,errorMessage)
        // ..
      });

    }else{
      //sign in user
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode, "+ " ,errorMessage)
      });

    }
     

  }



  return (
    <div className='relative'>
      <Header/>
      <img alt='bg-img' src={BG_IMG}/>

      <form 
        className='absolute top-28 ml-2 p-15 rounded-md left-4/12 w-[450px]  bg-black/80'
        onSubmit={(e)=>e.preventDefault()}
       >

        <h1 className="text-4xl font-extrabold mb-3 text-white">
          {isSignIn? "Sign In":"Sign Up"}
        </h1>
        
        <div >
          {
          !isSignIn && 
          (<><input 
          ref={name}
          type='text' 
          placeholder='Enter name' 
          className="p-4 my-3 w-full  bg-gray-950  placeholder:text-white text-white text-lg border-1 focus:ring-white rounded">

          </input>
          <br/></>)
          }

          <input 
            ref={email}
            type='text' 
            placeholder='Email or mobile number' 
            className="p-4 my-3 w-full  bg-gray-950 placeholder:text-white text-white text-lg border-1 focus:ring-white rounded">
          </input>

          <br />
          <input 
          ref={password}
            type='password' 
            placeholder='Password' 
            className="p-4 my-3 w-full bg-gray-950  text-white text-lg  placeholder:text-white focus:ring-white rounded border-1 border-white">
          </input>

          <p className='text-red-700 font-bold'>{errorMessage}</p>

          <br />
          <button
            className='p-4 mb-2 w-full text-xl  placeholder:text-white text-white font-bold bg-red-600 rounded'
            onClick={handleClickButton}
            type='submit'
            >
            {isSignIn? "Sign In":"Sign Up"}
          </button>

          <p 
            className='text-gray-400 cursor-pointer' 
            onClick={toggleSignInform}>
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