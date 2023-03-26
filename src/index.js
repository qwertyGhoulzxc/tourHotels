import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from "./global-styles/styles";
import {Provider} from "react-redux";
import {store} from './redux/store/store'
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
<GlobalStyle/>
        <Router>
            <App />
        </Router>
    </Provider>
);


