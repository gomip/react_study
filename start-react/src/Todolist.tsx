import * as React from 'react'
import TodoItem, {Todo} from "./TodoItem";
import {useEffect, useState} from "react";

const TodoListPage = () => {

    const [cnt,setCnt]=useState(0)
    console.log(cnt)
    const [todoList,setTodoList]=useState([
        {id: 1, todo: 'a'},
        {id: 2, todo: 'b'},
        {id: 3, todo: 'c'}
    ])

    //조건이 없을 경우 state가 변경되거나 props에 의해 계속 작동됨
    //두번째 인자로 빈 배열을 넣으면 처음 렌더만 적용됨.


    const addTodo=()=>{
        //setTodo(todoList.concat({id:4,todo:'d'}))
        const b = todoList.length-1
        //todo:todo와같이 똑같은 값을 넣게 되는 경우 todo 하나만 적어도됨
        const a = todoList.concat({id:todoList[b].id+1,todo})
        setTodoList(a)
    }

    const[todo,setTodo]=useState('')

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const todo = e.target.value
        setTodo(todo)

    }

    const RemoveTodo=(id:number)=>{
        const newTodoList=todoList.filter(item=>item.id!==id)
        setTodoList(newTodoList)
    }

    const UpdateTodo=(todo:Todo)=>{
        const newTodoList = todoList.map(item=>{
            return item.id===todo.id
            ? todo
            : item
        })
        setTodoList(newTodoList)
    }

    return (
        <div>
            {
                //고유한 key를 부여해준다.
                //보통은 db의 id값을 준다.
                todoList.map((item, idx) =>
                    <TodoItem key={`Todo:${item.id}`}
                              todo={item}
                              onRemove={RemoveTodo}
                              onUpdate={UpdateTodo}
                    />)
            }
            <input onChange={handleChange}/>
            <input type="button" onClick={addTodo} value="추가"/>
        </div>
    )
}
export default TodoListPage


// const result=todoList.map((item,idx)=>{
//     console.log('item',item)
//     return item+1
// })
// 위의 주석 코드와 아래 한줄이 같은 작
// const result=todoList.map(item=>item+1)
//
// console.log('result',result)

//<input type="button" onClick={()=>setCnt(cnt+1)} value="+"/>
//todoList.map(item => <TodoItem key={item.id} todo={item}/>)