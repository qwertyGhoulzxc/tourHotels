import React, {useState} from 'react';
import {StyledLine,StyledH4,SquareButton,LogicCounterBlock,StyledCount} from "../stylesHeaderPart";
import {counterActions} from "../../../../redux/duks/counter-slice";
import {useDispatch, useSelector} from "react-redux";
import {counterSelectors} from "../../../../redux/duks/counter-slice";

const CounterOfChildren = ({text}) => {

    const dispatch = useDispatch();
    const selector = useSelector(counterSelectors);
    const {addChildren,removeChildren} = counterActions;
    const [disableChildren,setDisableChildren]=useState(true)


    const handleAdd = (e)=>{
        setDisableChildren(false)
        dispatch(addChildren())

    }
    const handleDelete= (e)=>{


        if(selector.childrenState<=1 &&selector.childrenState>=1){
            setDisableChildren(true)
            dispatch(removeChildren())

        }

        else if( selector.childrenState>=1){
            dispatch(removeChildren())
        }
    }
    return (
        <StyledLine>
            <StyledH4>{text}</StyledH4>
            <LogicCounterBlock>
                <SquareButton onClick={handleDelete} disable={disableChildren}  >–</SquareButton>
                <StyledCount>{selector.childrenState}</StyledCount>
                <SquareButton onClick={handleAdd}>+</SquareButton>
            </LogicCounterBlock>
        </StyledLine>
    );
};

export default CounterOfChildren;