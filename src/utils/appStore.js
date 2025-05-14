import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import moviesReducer from './moviesSlice'
import SearchReducer from './toggleSlice'
import languageReducer from './configSlice'

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        showGptSearch: SearchReducer,
        langConfig:languageReducer

    }
})

export default appStore;