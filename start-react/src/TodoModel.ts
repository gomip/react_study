import {Todo} from "./TodoItem";
import {Action, action, Thunk, thunk} from "easy-peasy";
import {StoreModel} from "./index";

export interface TodoModel{
    items:Todo[]
    addTodo : Action<TodoModel,string>
    removeTodo:Action<TodoModel,number>
    updateTodo:Action<TodoModel,Todo>
    easyAddTodo:Thunk<TodoModel,string,void,StoreModel>
}

export const TodoM:TodoModel={
    items:[{id:1,todo:'wahahahahah'}],

    //action = 무슨 동작을 할지 미리 알려주는것
    //state = local state(items값) payload = 가지고 있는 값
    //이지피지에서는 state라고 쓰지만 본래 js는 {items}라고 작성 -> 이지피지에서는 렌더링할때 보장 안해준다고 함.
    addTodo:action((state,payload)=>{

        const todo = {id : 2 ,todo:payload}

        // 원래는 filter 혹은 concat을 통해 데이터를 넣어서 가져와야하지만 이지피지는 그냥 push내에 되어있다.
        state.items.push(todo)
    }),

    removeTodo:action((state,payload)=>{
        const newTodo = state.items.filter(item=>item.id!==payload)
        //push 할 필요없이 그냥 새로운 newTodo를 넣어주면 값을 자동으로 변경해준다.
        state.items=newTodo
    }),

    updateTodo:action((state,todo)=>{
        const newTodo = state.items.map(item=>{
            return item.id===todo.id
                ?todo:
                item
        })
        state.items=newTodo
    }),

    easyAddTodo:thunk((actions,payload,helpers)=>{
        {/* await을 사용해서 fetch가 작업이 완료되기를 기다렸다가 다음 코드가 수행된다. const a = await fetch("api 주소")*/}

        actions.addTodo('ffffffffff')
    })
}

