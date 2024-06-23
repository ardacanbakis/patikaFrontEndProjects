import React from "react";
import "./main.css";

function Main({ todos, deleteTodo, toggleTodo }) {
  return (
    <div>
      <div className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Tümünü tamamlandı olarak işaretle</label>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)} 
                  id={`toggle-${todo.id}`} 
                />
                <label htmlFor={`toggle-${todo.id}`}>{todo.text}</label> 
                <button
                  className="destroy"
                  onClick={() => deleteTodo(todo.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
