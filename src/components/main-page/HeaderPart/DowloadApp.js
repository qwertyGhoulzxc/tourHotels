import React from 'react';
import AppStore from '../../../img/App_store.png'
import GooglePlay from '../../../img/Google_Play.png'
import {DownloadBlock} from './stylesHeaderPart'

const DowloadApp = () => {
    return (
        <DownloadBlock>
           <a href={'https://play.google.com/store/games'}><img src={GooglePlay}/></a>
          <a href={'https://www.apple.com/app-store/'} > <img src={AppStore}/></a>


        </DownloadBlock>
    );
};

export default DowloadApp;