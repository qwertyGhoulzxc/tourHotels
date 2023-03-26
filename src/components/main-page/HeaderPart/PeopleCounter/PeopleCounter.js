import React, {useState} from 'react';
import {FlexStyle, PeopleField, Relative} from '../stylesHeaderPart'
import ActiveWindow from "./ActiveWindow";
import {useDispatch, useSelector} from "react-redux";
import {counterSelectors} from "../../../../redux/duks/counter-slice";

import {visionOpenedActions, visionOpenedSelector} from "../../../../redux/duks/openWindowsInput-slice";
import {buttonClickActions, selectedLineSelector} from "../../../../redux/duks/buttons-slice";

const PeopleCounter = () => {
const {openCalendar,closeCalendar,openCounter,closeCounter} = visionOpenedActions
    const {colorCounter,disableAllLines} = buttonClickActions
const storage = useSelector(counterSelectors)
const visibility = useSelector(visionOpenedSelector)
    const isSelected = useSelector(selectedLineSelector)
    const dispatch = useDispatch()
    const handleOpenWindow = e=>{
if(visibility.calendarVision===true || visibility.counterVision===false){
    dispatch(closeCalendar())
    dispatch(openCounter())
    dispatch(colorCounter())
    //true
}
else{
    dispatch(closeCounter())
    dispatch(disableAllLines())
    //closeAll
}
    }


    return (
        <FlexStyle>
        <PeopleField selected={isSelected.counter} onClick={handleOpenWindow}>
            Adults {storage.adultsState} — {storage.childrenState} Children —     {storage.roomsState} Room
        </PeopleField>
            <ActiveWindow visibility={visibility.counterVision}/>

        </FlexStyle>
    );
};

export default PeopleCounter;