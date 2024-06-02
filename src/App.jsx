import React, { useState, useRef } from "react";
import './App.css';

function App() {
  const userInput = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    const newTodo = userInput.current.value.trim();
    if (newTodo) {
      setTodo([...todo, newTodo]);
      userInput.current.value = '';
    }
  };

  const deleteTodo = (index) => {
    const newTodoList = [...todo];
    newTodoList.splice(index, 1);
    setTodo(newTodoList);
  };

  const editTodo = (index) => {
    const updatedValue = prompt('Enter updated value', todo[index]);
    if (updatedValue) {
      const newTodoList = [...todo];
      newTodoList[index] = updatedValue;
      setTodo(newTodoList);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter todo" ref={userInput} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <div>
              <button className="edit-button" onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
