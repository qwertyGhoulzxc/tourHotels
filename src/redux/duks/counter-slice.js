import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    actions:{
    adultsState:0,
    childrenState:0,
    roomsState:1,
    },
}

export const counterSlice = createSlice({
    name:'countPeople',
    initialState,
    reducers: {
        addAdult: (state, action) => {
            state.actions.adultsState+=1
        },
        removeAdult: (state, action) => {
            state.actions.adultsState -= 1
        },
        addChildren: (state, action) => {
            state.actions.childrenState+=1
        },
        removeChildren: (state, action) => {
            state.actions.childrenState -= 1
        },
        addRooms: (state, action) => {
            state.actions.roomsState+=1
        },
        removeRooms: (state, action) => {
            state.actions.roomsState -= 1
        },


    }

})

export const counterReducers = counterSlice.reducer;
export const counterActions = counterSlice.actions
export const counterSelectors = (state)=>state.countPeople.actions;
