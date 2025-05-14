import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import moviesReducer from './moviesSlice'
import SearchReducer from './toggleSlice'

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        showGptSearch: SearchReducer

    }
})

export default appStore;