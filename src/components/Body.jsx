import React, { useEffect } from 'react'
import SignUp from './SignUp'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browser from './Browser'

import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {
  const dispatch = useDispatch();


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email ,displayName, photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
      
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
     
    }
  });
  },[])

  const appRoutes = createBrowserRouter([
    {
      path:"/",
      element:<SignUp/>
    },
    {
      path:"/browser",
      element:<Browser/>
    }
  ])
  
  return (
    <div>      
        <RouterProvider router={appRoutes}/>
    </div>
  )
}

export default Body