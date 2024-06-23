import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Learn React", completed: false },
    { id: 3, text: "Have a life!", completed: false },
    
  ]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text, completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const [filter, setFilter] = useState('all');

const filteredTodos = todos.filter(todo => {
  if (filter === 'active') {
    return !todo.completed;
  } else if (filter === 'completed') {
    return todo.completed;
  }
  return true;
});

const handleFilterChange = (newFilter) => {
  setFilter(newFilter);
};

const clearCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
};

const hasCompleted = todos.some(todo => todo.completed); 


  

  return (
    <>
      <div className="todoapp">
        <Header addTodo={addTodo} />
        <Main todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        <Footer onFilterChange={handleFilterChange} clearCompleted={clearCompleted} />


        <div className="info">
        <p>Created with <span class="red">love</span> by <a href="https://ardacanbakis.com" target="_blank">Arda Canbakış </a>© 2024</p>
        
        </div>
      </div>
    </>
  );
}

export default App;
