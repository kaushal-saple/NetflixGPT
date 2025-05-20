import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptRecommendedMovies",
    initialState:{
        gptRecommendedMovies:null,
        tmbdSearchMovies:null
    },
    reducers:{
        addGptMovies:(state,action)=>{
           const {gptMovie,searchTMDB} = action.payload;
           state.gptRecommendedMovies = gptMovie;
           state.tmbdSearchMovies = searchTMDB
        },
        removeGptMovies:(state)=>{
            state.gptRecommendedMovies = null;
            state.tmbdSearchMovies = null;

        }
    }
})

export const {addGptMovies,removeGptMovies} = gptSlice.actions;
export default gptSlice.reducer;