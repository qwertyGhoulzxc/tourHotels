import React, {useState} from 'react';
import {StyledLine,StyledH4,SquareButton,LogicCounterBlock,StyledCount} from "../stylesHeaderPart";
import {counterActions} from "../../../../redux/duks/counter-slice";
import {useDispatch, useSelector} from "react-redux";
import {counterSelectors} from "../../../../redux/duks/counter-slice";

const CounterOfRooms = ({text}) => {

    const dispatch = useDispatch();
    const selector = useSelector(counterSelectors);
    const {addRooms,removeRooms} = counterActions;
    const [disableRooms,setDisableRooms]=useState(true)


    const handleAdd = (e)=>{
        setDisableRooms(false)
        dispatch(addRooms())

    }
    const handleDelete= (e)=>{


        if(selector.roomsState<=2 &&selector.roomsState>=2){
            setDisableRooms(true)
            dispatch(removeRooms())

        }

        else if( selector.roomsState>=2){
            dispatch(removeRooms())
        }
    }
    return (
        <StyledLine>
            <StyledH4>{text}</StyledH4>
            <LogicCounterBlock>
                <SquareButton onClick={handleDelete} disable={disableRooms}  >–</SquareButton>
                <StyledCount>{selector.roomsState}</StyledCount>
                <SquareButton onClick={handleAdd}>+</SquareButton>
            </LogicCounterBlock>
        </StyledLine>
    );
};

export default CounterOfRooms;