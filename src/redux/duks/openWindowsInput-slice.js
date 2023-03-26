import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    calendarVision:false,
    counterVision:false,
}

export const visionOpenedState = createSlice({
    name:'visionInput',
    initialState,
    reducers:{
        openCalendar:(state,action)=>{state.calendarVision=true},
        closeCalendar:(state,action)=>{state.calendarVision=false},
        openCounter:(state,action)=>{state.counterVision=true},
        closeCounter:(state,action)=>{state.counterVision=false},


    }
})

export const visionOpenedSelector = (state)=>state.visibilityOpened;
export const visionOpenedReducers = visionOpenedState.reducer;
export const visionOpenedActions = visionOpenedState.actions