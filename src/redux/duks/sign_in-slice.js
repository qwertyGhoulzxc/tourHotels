import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data:[],
    reg:false,
}

export const signInSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signIn:(state,action)=>{
            state.reg = true;
            state.data = [action.payload];
               },


        logOut:(state,action)=>{
            state.data=[];
            state.reg = false;

        }

    }
})
export const isUserRegSelector = (state) => state.user.reg;
export const userInfoSelector = (state) => state.user.data;


export const userInfoActions = signInSlice.actions;
export const usersReducer = signInSlice.reducer;