import React, {useState} from 'react';
import {StyledLine,StyledH4,SquareButton,LogicCounterBlock,StyledCount} from "../stylesHeaderPart";
import {counterActions} from "../../../../redux/duks/counter-slice";
import {useDispatch, useSelector} from "react-redux";
import {counterSelectors} from "../../../../redux/duks/counter-slice";

const CounterOfAdults = ({text}) => {

const dispatch = useDispatch();
const selector = useSelector(counterSelectors);
const {addAdult,removeAdult} = counterActions;
const [disableAdults,setDisableAdults]=useState(true)


const handleAdd = (e)=>{
    setDisableAdults(false)
dispatch(addAdult())

}
const handleDelete= (e)=>{


if(selector.adultsState<=1 &&selector.adultsState>=1){
    setDisableAdults(true)
    dispatch(removeAdult())

}

else if( selector.adultsState>=1){
    dispatch(removeAdult())
}
}
    return (
        <StyledLine>
            <StyledH4>{text}</StyledH4>
            <LogicCounterBlock>
            <SquareButton onClick={handleDelete} disable={disableAdults}  >–</SquareButton>
                <StyledCount>{selector.adultsState}</StyledCount>
            <SquareButton onClick={handleAdd}>+</SquareButton>
            </LogicCounterBlock>
        </StyledLine>
    );
};

export default CounterOfAdults;