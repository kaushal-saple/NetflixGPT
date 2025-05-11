import React from 'react'
import SignUp from './SignUp'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browser from './Browser'



const Body = () => {

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
    <div >      
        <RouterProvider router={appRoutes}/>
    </div>
  )
}

export default Body