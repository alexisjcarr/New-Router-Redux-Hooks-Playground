import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  return (
    <>
      {todos.map(todo => (
        <Todo id={todo.id} task={todo.task} completed={todo.completed} />
      ))}
    </>
  );
};

export default TodoList;
