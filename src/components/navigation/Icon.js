import React from 'react';
import {SvgImage} from "./styles/style";


const Icon = ({children}) => {

    return (

    <SvgImage color={children.props.color} size={children.props.size}>
        {children}

    </SvgImage>

    );
};

export default Icon;