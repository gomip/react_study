import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, StoreProvider} from "easy-peasy";
import {TodoM, TodoModel} from "./TodoModel";


export interface StoreModel{
    todo:TodoModel
}

const storeModel:StoreModel={
    todo:TodoM
}
const store=createStore(storeModel,{})

ReactDOM.render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
