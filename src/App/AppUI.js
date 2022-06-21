import React from "react";
import { TodoContext } from "../todoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo 
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                    {error && <p>Desperate, there was an error...</p>}
                    {loading && <p>Loading, be patient...</p>}
                    {(!loading && !searchedTodos.length) && <p>Create your first To-Do</p>}
    
                    {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
                </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    )
}

export { AppUI }