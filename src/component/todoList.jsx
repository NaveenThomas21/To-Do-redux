import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../feature/todo/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                    <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
