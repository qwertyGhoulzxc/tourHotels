import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cities:['New York','Roma','Tokio'],
    chosed:'New Yourk'

}

const citySelectedSlice = createSlice({
    name:'selectCity',
    initialState,
    reducers:{
        chosedCity:(state,action)=>{state.chosed=action.payload}
    }
})

export const citySelectAction = citySelectedSlice.actions;
export const citySelectReducers = citySelectedSlice.reducer;
export const citySelectSelector = (state)=> state.cityChosed