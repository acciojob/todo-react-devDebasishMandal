
import React,{useState} from "react";
import './../styles/App.css';
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

const App = () => {



  const[todoList,setTodolist]=useState([]);
  return (
    <div>
        <CreateTodo setTodolist={setTodolist} todoList={todoList} />
        <DisplayTodo todoList={todoList} setTodolist={setTodolist} />
    </div>
  )
}

export default App
