import React from 'react';
import './datapicker.css'
import {useState} from "react";
import DatePicker from 'react-datepicker';
import {useDispatch, useSelector} from "react-redux";
import {dateActions} from "../../../../../redux/duks/dates-slice";
import {CalendarVisibility} from '../../stylesHeaderPart'
import {visionOpenedActions, visionOpenedSelector} from "../../../../../redux/duks/openWindowsInput-slice";
import {counterSelectors} from "../../../../../redux/duks/counter-slice";

require('react-datepicker/dist/react-datepicker.css');



const   Calendar = () => {
    const dispatch = useDispatch()
    const {setStartTourDate,setEndTourDate} = dateActions
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;

dispatch(setStartTourDate(JSON.stringify(dates[0])))
        if(dates[1]===null){
            dispatch(setEndTourDate('Check-out'))
        }
        else{
            dispatch(setEndTourDate(JSON.stringify(dates[1])))
        }


        setStartDate(start);
        setEndDate(end);
    };

    const {openCalendar,closeCalendar,openCounter,closeCounter} = visionOpenedActions
    const visibility = useSelector(visionOpenedSelector)

    return (
        <CalendarVisibility vision={visibility.calendarVision}>
<div className='customDatePickerWidth'>
        <DatePicker

            monthsShown={2}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
        />
</div>
        </CalendarVisibility>
    );
};

export default Calendar;