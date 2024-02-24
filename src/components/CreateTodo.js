import React,{useState} from 'react';

const CreateTodo = ({setTodolist,todoList}) => {

const[todo,setTodo]=useState("");
// const[todoList,setTodolist]=useState([]);


function handleTodo(e){
e.preventDefault();
// initially the length of the elemnt will be zero so 0+1=1 id= 1;
// OR 
// we can whatever is the last id if the to create new element we can add +1;
// when the array has zero element then we manually set to 0;
let lastElement = todoList[todoList.length-1];
// let lastId=todoList[todoList.length-1].id || 0;
let lastId= lastElement ? lastElement.id : 0
let obj={
  id:lastId+1,
  title:todo,
}

console.log(obj);
// adding the older value of array ancurretn value.
setTodolist([...todoList,obj]);
setTodo("");
}

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleTodo}>
        <input type="text" value={todo}
        onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default CreateTodo