import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListPage from "./Todolist";

/*
=============================================
아래 전체가 하나의 컴퍼넌트
=============================================
 */

const handle=(e:any)=>{
  console.log('Click',e.target.value)
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          와!react 아시는구나!
        </a>
      </header>
      <input type="button" value = "버튼" onClick={handle}/>
      <TodoListPage/>
    </div>
  );
}

export default App;