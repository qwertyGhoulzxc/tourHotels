import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from '../duks/sign_in-slice'
import {buttonReducers} from "../duks/buttons-slice";
import {counterReducers} from "../duks/counter-slice";
import {visionOpenedReducers} from "../duks/openWindowsInput-slice";
import {dateReducers} from "../duks/dates-slice";
import {citySelectReducers} from "../duks/city_select-slice";
import {sendToServerReducer} from "../duks/searchData-slice";
export const store = configureStore({
    reducer:{
        'user':usersReducer,
        'buttons':buttonReducers,
        'countPeople':counterReducers,
        'visibilityOpened':visionOpenedReducers,
        'travelDate':dateReducers,
        'cityChosed':citySelectReducers,
        'sendServer':sendToServerReducer,
    }

})
