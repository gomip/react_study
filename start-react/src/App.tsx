import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListPage from "./Todolist";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EasyTodoList from "./EasyTodoList";

/*
=============================================
const 아래 전체가 하나의 컴퍼넌트
=============================================
 */

const handle = (e: any) => {
    console.log('Click', e.target.value)
}

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/Todo">
                    <TodoListPage/>
                </Route>
                <Route path="/easy">
                    <EasyTodoList/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;