import {createSlice} from '@reduxjs/toolkit'

const initialState = {
actions:{ stays:true,
    attractions:false,
    account:false,
opened:false},
    selectedCheckBox:{
    select:false,
    date:false,
    counter:false,
    }
}


export const changeState = createSlice({
    name:'buttons',
    initialState,
    reducers:{
        staysActive:(state,action)=>{state.actions.stays=true;state.actions.attractions=false;state.actions.account=false},
        attractionsActive:(state,action)=>{state.actions.stays=false;state.actions.attractions=true;state.actions.account=false},
        accountActive:(state,action)=>{state.actions.stays=false;state.actions.attractions=false;state.actions.account=true},
        OpenAct:(state, action)=>{state.actions.opened=true},
        CloseAct:(state, action)=>{state.actions.opened=false},
        colorSelect:(state,action)=>{state.selectedCheckBox.select=true;state.selectedCheckBox.date=false;state.selectedCheckBox.counter=false},
        colorDate:(state,action)=>{state.selectedCheckBox.select=false;state.selectedCheckBox.date=true;state.selectedCheckBox.counter=false},
        colorCounter:(state,action)=>{state.selectedCheckBox.select=false;state.selectedCheckBox.date=false;state.selectedCheckBox.counter=true},
        disableAllLines:(state,action)=>{state.selectedCheckBox.select=false;state.selectedCheckBox.date=false;state.selectedCheckBox.counter=false}
    }
});

export const buttonStateSelector = (state)=> state.buttons.actions
export const selectedLineSelector = (state)=> state.buttons.selectedCheckBox
export const buttonClickActions = changeState.actions;
export const buttonReducers = changeState.reducer;