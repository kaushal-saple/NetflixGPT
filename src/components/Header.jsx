import {useEffect}from 'react'
import { auth } from '../utils/firebase';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from '../utils/toggleSlice';
import { changeLangugage } from '../utils/configSlice';
import {removeGptMovies} from '../utils/gptSlice'


const Header = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch()
  const user = useSelector((store)=> store.user);
  const changeButtonText = useSelector((store)=>store.showGptSearch.showGptSearchView);
  
  
  


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email ,displayName, photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browser")
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/")
     
    }
  });

  return ()=>{
    unsubscribe()
  }
  },[])


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


  const handleToggleSearch = ()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguage = (e)=>{
    dispatch(changeLangugage(e.target.value));
  }

  if(changeButtonText===false){
    dispatch(removeGptMovies())
  }


  return (
    <div 
    className='absolute bg-gradient-to-b from-black w-full h-20 flex justify-between items-center z-20'>
      
      <div className='w-50 ml-20 p-1' >
        <img 
        alt="Netflix Logo" 
        src={LOGO} />
      </div>

      {user && 

        
        <div className='flex gap-1'>
          {
            //show only when user is on GPT search page
            changeButtonText &&
             <div className='mr-5  font-semibold  bg-purple-600 rounded-md text-center'>
            {/* Making the dropdown dynamic using consta data */}
            <select className='text-white p-1  rounded-md cursor-pointer'onChange={handleLanguage} >
              {SUPPORTED_LANGUAGE.map((lang)=><option key={lang.name} value={lang.identifier} className='bg-black'>{lang.name}</option>)}
            </select>
          </div>
          }

          <button 
          className='px-4 py-1  mr-5 text-white bg-purple-600 rounded-lg font-medium cursor-pointer hover:scale-110 hover:bg-purple-800'
          onClick={handleToggleSearch}
          >{
            changeButtonText?"Home":"GPT Search"
          }
          </button>
          <img 
          alt="profile" 
          src={user?.photoURL} 
          width={28}
          ></img>
          <button 
          className='text-white mr-5 cursor-pointer font-bold' 
          onClick={handleSignOut}>Sign Out</button>
        </div>
      }
      
    </div>
  )
}

export default Header
