import React from 'react';

const DisplayTodo =({todoList,setTodolist})=>{

    function deleteTodo(id){
     setTodolist(todoList.filter(todo=>todo.id!=id))
    }


    return (
        <div>
               <ul>
            {
                todoList.map(todo=>(
                   
            <li key={todo.id}>
                {todo.title}
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                
                </li>
            
                   
                )) 

            }
               </ul>
        </div>
    )
}

export default DisplayTodo;