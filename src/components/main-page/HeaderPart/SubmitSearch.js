import React from 'react';
import {SubmitBtn} from './stylesHeaderPart'
import {useDispatch, useSelector} from "react-redux";
import {sendToServerActions} from "../../../redux/duks/searchData-slice";
import {buttonClickActions} from "../../../redux/duks/buttons-slice";
import {visionOpenedActions} from "../../../redux/duks/openWindowsInput-slice";
import {citySelectSelector} from "../../../redux/duks/city_select-slice";
import {dateStateSelector} from "../../../redux/duks/dates-slice";
import {counterSelectors} from "../../../redux/duks/counter-slice";
const SubmitSearch = () => {
    const dispatch = useDispatch()
    const {setCity,setStartDate,setEndDate,setAdults,setChildren,setRooms}=sendToServerActions
    const {closeCalendar,closeCounter}=visionOpenedActions
    const {disableAllLines} = buttonClickActions
    //city
    const citya = useSelector(citySelectSelector)
    //data
    const allDate = useSelector(dateStateSelector)
    //counter
    const counter = useSelector(counterSelectors)
    const handleSearch=e=>{
        dispatch(disableAllLines())
        dispatch(closeCalendar())
        dispatch(closeCounter())
        dispatch(setCity(citya.chosed))
        dispatch(setStartDate(allDate.startDateTour))
        dispatch(setEndDate(allDate.endDateTour))
        dispatch(setAdults(counter.adultsState))
        dispatch(setChildren(counter.childrenState))
        dispatch(setRooms(counter.roomsState))


    }
    return (
        <SubmitBtn onClick={handleSearch}>
            Search
        </SubmitBtn>
    );
};

export default SubmitSearch;