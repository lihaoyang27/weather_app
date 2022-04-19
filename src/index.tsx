import React from 'react';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "../src/reducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";


const newStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


// @ts-ignore
const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={newStore}>
        <App />
    </Provider>,

);
