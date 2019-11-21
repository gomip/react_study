import * as React from 'react'
import {Link} from "react-router-dom";
import {useStoreActions, useStoreState} from "./Hooks";
import TodoItem, {Todo} from "./TodoItem";
import {useState} from "react";

const EasyTodoList: React.FC = () => {
    const [todo,setTodo]=useState("")
    const todoList=useStoreState(state=>state.todo.items)
    const addTodo=useStoreActions(actions => actions.todo.addTodo)
    const removeTodo=useStoreActions(actions=>actions.todo.removeTodo)
    const updateTodo=useStoreActions(actions=>actions.todo.updateTodo)

    const handleAddTodo=()=>{
        addTodo(todo)
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const todo = e.target.value
        setTodo(todo)
    }

    const RemoveTodo=(id:number)=>{
        removeTodo(id)
    }
    const UpdateTodo=(todo:Todo)=>{
        updateTodo(todo)
    }

    return (
        <div>
            {/*url*/}
            <p>
                <Link to="Todo">go to Todo</Link>
            </p>
            <input onChange={handleChange}/>
            <input type="button" onClick={handleAddTodo} value="추가"/>

            {
                todoList.map((item, idx) =>
                    <TodoItem key={`Todo:${item.id}`}
                              todo={item}
                              onRemove={RemoveTodo}
                              onUpdate={UpdateTodo}
                    />)
            }
            EasyTodoList
        </div>
    )
}
export default EasyTodoList