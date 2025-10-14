import React, { useEffect, useReducer, useRef, useState } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "Add":
      return [...todos, action.payload];
    case "Delete":
      return todos.filter((_, index) => index !== action.payload);
  }
}

function TodoWithReducer() {
  const [todo, setTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const inputRef = useRef("null");

  const addTask = () => {
    dispatch({ type: "Add", payload: todo });
    setTodo("");
  };

  const deleteTask = (index) => {
    dispatch({ type: "Delete", payload: index });
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={todo}
        type="text"
        ref={inputRef}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoWithReducer;
