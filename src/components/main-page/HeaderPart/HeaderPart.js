import React from 'react';
import {Slogan, Flex, White} from './stylesHeaderPart'
import BookVariants from "./BookVariants";

import PeopleCounter from "./PeopleCounter/PeopleCounter";
import AddDate from "./DateInput/AddDate/AddDate";
import SubmitSearch from "./SubmitSearch";
import {HeaderHeight} from './stylesHeaderPart'
import DowloadApp from "./DowloadApp";
const HeaderPart = () => {
    return (
       <HeaderHeight>
            <Slogan>Discover stays to live, work or just relax</Slogan>
    <Flex>

            <BookVariants/>

        <AddDate/>
            <PeopleCounter/>
        <SubmitSearch/>

        </Flex>
<DowloadApp/>
       </HeaderHeight>
    );
};

export default HeaderPart;