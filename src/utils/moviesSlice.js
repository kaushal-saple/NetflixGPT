import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        mainMovieTrailer:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMainMovieTrailer:(state,action)=>{
            state.mainMovieTrailer = action.payload
        }
    }
}) 


export const {addNowPlayingMovies,addMainMovieTrailer} = movies.actions;
export default movies.reducer;