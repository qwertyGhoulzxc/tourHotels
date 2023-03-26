import React, {useState} from 'react';
import Calendar from "./Calendar";
import {useDispatch, useSelector} from "react-redux";
import {visionOpenedActions,visionOpenedSelector} from "../../../../../redux/duks/openWindowsInput-slice";
import ScreenDate from './ScreenData'
import {CustomFlex,CounterH5} from "../../stylesHeaderPart";
const AddDate = () => {




    return (
        <CustomFlex>
<CounterH5>Check-in — Check-out</CounterH5>
          <ScreenDate >
              <Calendar/>

          </ScreenDate>


        </CustomFlex>
    );
};

export default AddDate;