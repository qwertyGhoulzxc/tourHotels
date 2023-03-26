import React from 'react';
import {CounterWindow} from "../stylesHeaderPart";
import CounterOfAdults from "./CounterOfAdults";
import CounterOfChildren from "./CounterOfChildren";
import CounterOfRooms from "./CounterOfRooms";

const ActiveWindow = ({visibility}) => {
    return (
        <CounterWindow vision={visibility}>
            <CounterOfAdults text={'Adults'} />
            <CounterOfChildren text={'Children'}/>
            <CounterOfRooms text={'Rooms'}/>
        </CounterWindow>
    );
};

export default ActiveWindow;