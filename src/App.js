import React from "react";
import { TodoCounter } from "./TodoCounter";
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      {/* <TodoSearch />, */}
      {/* <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
      </TodoList>, */}
      {/* <CreateTodoButton /> */}
    </React.Fragment>
  );
}

export default App;
