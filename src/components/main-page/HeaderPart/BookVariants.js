import React from 'react';
import {StyledSelect,StyledOption,H5ForCity} from "./stylesHeaderPart";
import {useDispatch, useSelector} from "react-redux";
import {buttonClickActions, selectedLineSelector} from "../../../redux/duks/buttons-slice";
import {citySelectAction, citySelectSelector} from "../../../redux/duks/city_select-slice";


const BookVariants = () => {

    const citiesData = useSelector(citySelectSelector)
    const isOpened = useSelector(selectedLineSelector)
    const dispatch = useDispatch()
    const {colorSelect} = buttonClickActions //action  adddddd
    const {chosedCity} = citySelectAction;
    const handleOpen=(e)=>{
dispatch(colorSelect())
        dispatch(chosedCity(e.target.value))
    }
    return (
        <>
            <H5ForCity>Your destination or hotel name</H5ForCity>
            <StyledSelect onClick={handleOpen} selected={isOpened.select}>
                {citiesData.cities?.map((i,ii)=>{
                  return  <StyledOption key={ii}  value={i}>{i}</StyledOption>
                })}
            </StyledSelect>


        </>
    );
};

export default BookVariants;