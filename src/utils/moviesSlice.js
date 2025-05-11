import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        mainMovieTrailer:null,
        popularMovies:null,
        topRatedMovie:null,
        upComingMovie:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMainMovieTrailer:(state,action)=>{
            state.mainMovieTrailer = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovie = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.topRatedMovie = action.payload
        }
    }
}) 


export const {addNowPlayingMovies,addMainMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movies.actions;
export default movies.reducer;