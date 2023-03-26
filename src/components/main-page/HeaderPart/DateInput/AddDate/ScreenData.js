import React, {useState} from 'react';
import {DataInput,ERelative} from '../../stylesHeaderPart'
import {useDispatch, useSelector} from "react-redux";
import {dateStateSelector} from "../../../../../redux/duks/dates-slice";
import {visionOpenedActions, visionOpenedSelector} from "../../../../../redux/duks/openWindowsInput-slice";
import {buttonClickActions, selectedLineSelector} from "../../../../../redux/duks/buttons-slice";
const ScreenData = ({children}) => {
    function getWeekDay(date) {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    }
    const getMonth1 =(date)=>{
        const month = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
        return month[date.getMonth()]
    }
    const LogDate = useSelector(dateStateSelector)
    const startDateTur = LogDate.startDateTour;
    const endDateTur = LogDate.endDateTour;
     const [calendarDate,setCalendarDate]= useState('')
    const {colorDate,disableAllLines} = buttonClickActions
    const reconvertData = (data)=>{
        console.log(data)
        let as = new Date(JSON.parse(data))
        console.log('as',as)
         return `${getWeekDay(as)} ${as.getDate()} ${getMonth1(as)}`
    }
    // if(startDateTur!=='Check-in'){
    //     setCalendarDate()
    // }
    const dispatch = useDispatch()
    const isSelected = useSelector(selectedLineSelector)
    const {openCalendar,closeCalendar,openCounter,closeCounter} = visionOpenedActions
    const visibility = useSelector(visionOpenedSelector)
    const handleOpen = ()=>{

        if(visibility.counterVision===true || visibility.calendarVision===false){
            dispatch(closeCounter())
            dispatch(openCalendar())
            dispatch(colorDate())
        }
        else{
            dispatch(closeCalendar())
            dispatch(disableAllLines())
        }


    }
    let condition =  'Check-out'
    return (
        <ERelative>
        <DataInput selected={isSelected.date} onClick={handleOpen}>
            {startDateTur!=='Check-in'?reconvertData(startDateTur):'Check-in'}—{endDateTur===condition ?  'Check-out':reconvertData(endDateTur) }



        </DataInput >
            {children}
        </ERelative>
    );
};

export default ScreenData;