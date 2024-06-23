import React, { useState } from "react";
import "./header.css";

function Header({ addTodo }) {
  const [inputText, setInputText] = useState(""); 

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      addTodo(inputText); 
      setInputText(""); 
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => e.preventDefault()}>  
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputText} 
          onChange={handleChange} 
          onKeyUp={handleKeyUp}
        />
      </form>
    </div>
  );
}

export default Header;
