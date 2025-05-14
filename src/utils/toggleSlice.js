import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggleSearch",
    initialState:{
        showGptSearchView:false
    },
    reducers:{
        toggleGptSearchView: (state)=>{
            state.showGptSearchView = !state.showGptSearchView;
        }
    }
})

export const {toggleGptSearchView} = toggleSlice.actions
export default toggleSlice.reducer;