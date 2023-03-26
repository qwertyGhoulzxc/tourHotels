import React from 'react';
import {FormBlock,Name,StyledInput,StyledSubmit,CombineInput,StyledLabel} from "./registerStyles/styles";
import {useDispatch} from "react-redux";
import  {userInfoActions} from "../../redux/duks/sign_in-slice";
import {useNavigate} from "react-router-dom";
import {buttonStateSelector,buttonClickActions} from "../../redux/duks/buttons-slice";

const Registration = () => {
const navigate = useNavigate()
    const dispatch = useDispatch()
    const {staysActive,attractionsActive,accountActive} = buttonClickActions
    const checkFill = ()=>{
        const mail = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        if(password !='' && mail!= ''&&password.length>=8){
            dispatch(userInfoActions.signIn({mail,password}))
            navigate('/')
            dispatch(staysActive())

        }


    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        checkFill()



    }

    return (
        <>
        <FormBlock>
        <Name>Sign in</Name>
            <CombineInput>
                    <StyledLabel for={'email'}>Email address</StyledLabel>
                    <StyledInput type={'email'} id={'email'} />
            </CombineInput>
            <CombineInput>
                    <StyledLabel for={'password'}>Password</StyledLabel>
                    <StyledInput type={'password'} id={'password'}/>
            </CombineInput>
            <StyledSubmit onClick={handleSubmit}>Sign In</StyledSubmit>
        </FormBlock>
           .
        </>

    );
};

export default Registration;