import {createSlice} from "@reduxjs/toolkit";

const initialState = {
startDateTour:'Check-in',
    endDateTour: 'Check-out',

}

export const dateState = createSlice({
    name:'dateState',
    initialState,
    reducers:{
        setStartTourDate:(state,action)=>{state.startDateTour=action.payload},
        setEndTourDate:(state,action)=>{state.endDateTour=action.payload}

    }

})

export const dateStateSelector = (state)=>state.travelDate;
export const dateReducers = dateState.reducer;
export const dateActions = dateState.actions;