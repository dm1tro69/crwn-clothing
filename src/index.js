import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from './redux/root-reducer'
import logger from 'redux-logger';

import './index.css';
import App from './App';


const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);

