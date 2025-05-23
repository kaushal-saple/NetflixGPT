import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"language",
    initialState:{
        selectedLanguage:"en"
    },
    reducers:{
        changeLangugage:(state,action)=>{
            state.selectedLanguage = action.payload
        } 
    }
})

export const{changeLangugage} = configSlice.actions;
export default configSlice.reducer;