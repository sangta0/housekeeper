import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store/index'
import Nav from './components/navbar/nav'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Nav />
        </BrowserRouter>
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();
