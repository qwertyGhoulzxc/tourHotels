import {createSlice} from "@reduxjs/toolkit";

const initialState={
    city:'',
    startDate:'',
    endDate:'',
    adults:0,
    children:0,
    rooms:1,
}

const sendToServerSlice = createSlice({
    name:'sendServer',
    initialState,
    reducers:{
        setCity:(state,action)=>{state.city=action.payload},
        setStartDate:(state,action)=>{state.startDate=action.payload},
        setEndDate:(state,action)=>{state.endDate=action.payload},
        setAdults:(state,action)=>{state.adults=action.payload},
        setChildren:(state,action)=>{state.children=action.payload},
        setRooms:(state,action)=>{state.rooms=action.payload},
    }
})

export const sendToServerReducer = sendToServerSlice.reducer;
export const sendToServerActions = sendToServerSlice.actions;
export const sendToServerSelector = state=>state.sendServer;