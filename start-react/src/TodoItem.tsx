import * as React from 'react'
import {useState} from "react";
import {useEffect} from "react";

//외부에서 사용하기 위해 export 추가
export interface Todo{
    id : number
    todo : string
}

interface Props{
    todo:Todo
    onRemove:(id:number)=>void
    onUpdate:(todo:Todo)=>void
}

//FC = function component
const TodoItem:React.FC<Props>= (props) =>{
    const [isUpdateMode,setUpdateMode]=useState(false)
    const [todo,setTodo]=useState(props.todo.todo)
    const handleRemove=()=>{
        props.onRemove(props.todo.id)
    }
    const handleUpdateMode=()=>{
        setUpdateMode(!isUpdateMode)
    }

    useEffect(()=>{
        console.log("샌즈!")

        return ()=>{
            document.title='빠라바라바라밤'
        }
    },[])

    const handleUpdate=()=>{
        props.onUpdate({id:props.todo.id,todo})
        setUpdateMode(!isUpdateMode)
    }

    return (
        <div>
            {
                isUpdateMode
                    ? <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                    : `${props.todo.id} : ${props.todo.todo}`
            }

            <input type="button" value = "제거" onClick={handleRemove}/>{
            isUpdateMode
            ?<input type="button" value = "확인" onClick={handleUpdate}/>
            :<input type="button" value = "수정" onClick={handleUpdateMode}/>
        }
        </div>
    )
}
export default TodoItem