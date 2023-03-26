import React, {useState} from 'react';
import {ReactComponent as Theme} from '../../img/Night.svg'
import {ReactComponent as Account} from '../../img/AccountCircle.svg'
import {StyledNav, Logo, StyledH2,Combine,LogOut,AccountResolves,Relative } from './styles/style'
import {isUserRegSelector,userInfoActions} from "../../redux/duks/sign_in-slice";
import Icon from "./Icon";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {buttonStateSelector,buttonClickActions} from "../../redux/duks/buttons-slice";
import Leave from "../../img/singOut_ico.png";

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isReg = useSelector(isUserRegSelector)
const buttonActions = useSelector(buttonStateSelector)
const {stays,attractions,account,opened}  = buttonActions;
    const {staysActive,attractionsActive,accountActive,OpenAct,CloseAct} = buttonClickActions

    const {logOut} = userInfoActions
const handleLogOut = (e) =>{
    dispatch(logOut())
    dispatch(CloseAct())
    dispatch(accountActive())
    navigate('/registration')

    }

    const handleClick = (e)=>{
 dispatch(staysActive())
        navigate('/')
        dispatch(CloseAct())
    }
    const handleClick1 = (e)=>{
        dispatch(attractionsActive())
        dispatch(CloseAct())
    }
    const handleClick2 = (e)=>{
        dispatch(accountActive())
        if(isReg===false){
        navigate('/registration')
            dispatch(CloseAct())
        }
        else if(isReg===true){ /////////////////////////////////////////////////// heeeeelp
            dispatch(OpenAct())
        }
        else{
            dispatch(CloseAct())
        }
    }


    return (
        <StyledNav>
            <Logo>TripHouse</Logo>
            <Combine>
            <StyledH2 onClick={handleClick}  id={'stays'} underlined={stays} width={'40px'}>Stays</StyledH2>
            <StyledH2 onClick={handleClick1}  id={'attractions'} underlined={attractions} width={'80px'}>Attractions</StyledH2>
            <Icon><Theme color={false} size={'30px'} /></Icon>
                <Relative>
                <AccountResolves id={'account'} onClick={handleClick2}>
            <Icon ><Account  color={account} size={'40px'} /></Icon>
                </AccountResolves>
                    <LogOut onClick={handleLogOut} vision={opened}><img src={Leave}/> Sing Out</LogOut>
                </Relative>
            </Combine>
        </StyledNav>
    );
};

export default Nav;