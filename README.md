#SetUP
- Install vite
- Install Tailwind 
- install react router dom
- Set up Routing for pages
- Sign UP/ Sign Form
- Form Validation
- useRef Hook
- Firebase setup

  - Install install -g firebase-tool
  - firebase login
  - firebase init
  - firebase deploy(Command)
- Set up a Redux store
- Authentication(Email & password)
 - used SignIN/Up user API
 - used authStateChangeAPI  for update store (We kept it inside the useEffect hook)
 - user update API(for display name & photoURL)
- useNavigate hook
- Signout button (used signout API)
- BUG FIX: when the user signUP, the profile photo was not getting updated 
 - solution: update our store again as soon as user signUP
- BUG FIX: User can route to browser page using /browser url without signIN/UP
 - solution: 
- Unsubscribing to listener
- Register to TMDB website and used its API
- Created Movieslice to store Nowplaying data
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Building secondary container
 - Movies List * N
 - Movies card * N
- Created MovieList & Movie Card component
- Fetch the data from TDMB via custom hook and updated the store
- TMDB Image CDN URL and the path
- Made UI for the Browser page
- Toggle GPT search button on Header
- If button is click -> GPTsearch page && button click again -> Home page
- Use redux to store  the toggle state
- create a ToggleSlice and provide it to store 
- create GPTSearch component and based on the toggle state render the components in browser
- GPTSearch component have GPTSearchBar and GPTMovieRecommendation component
- Creating Multilanguage feature for GPT search Page
- Created a DropDown for Multilanguage
- Language Constant file for languages
- Made Language option dynamic
- created configslice for language
- Dynamically access the language data from redux store and updated language in search bar





#structure
- Signup/signIn page

 - Header
  - Browser
    - trailer running in background
    - title & description
    - Buttons
    - title
    - List of movies



