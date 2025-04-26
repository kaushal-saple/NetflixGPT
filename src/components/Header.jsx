import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      navigate("/error")
      
      // An error happened.
    });
  }



  return (
    <div 
    className=' absolute bg-gradient-to-b from-black to-black/10 w-full h-20 flex justify-between items-center'>
      
      <div className='w-50 ml-20 p-1' >
        <img 
        alt="Netflix Logo" 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
      </div>

      {user && 
        <div className='flex gap-1.5'>
        <img 
        alt="profile" 
        src={user?.photoURL} 
        width={28}></img>

        <button 
        className='text-white mr-5 cursor-pointer font-bold' 
        onClick={handleSignOut}>Sign Out</button>
      </div>
      }
      
    </div>
  )
}

export default Header
