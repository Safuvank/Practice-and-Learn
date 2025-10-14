import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const AddTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteButton = (i) =>{
    setTodos(todos.filter((_,index) => index !== i ))
  }


  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={todo}
        type="text"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={AddTodo}>Add</button>
      <div>
        <ol>
          {todos.map((todo,index) => (
            <li key={index}>
              {todo}
              <button onClick={()=>deleteButton(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
