import React from "react";
import { useDispatch } from "react-redux";

import { removeTodo } from "../../store/actions";

const Todo = ({ task, id, completed }) => {
  const dispatch = useDispatch();

  const remove = id => {
    dispatch(removeTodo(id));
  };
  
  return (
    <div className="todo">
      <h4>{task}</h4>
      <p>{id}</p>
      <p>{`${completed}`}</p>
      <button onClick={() => remove(id)}>delete me</button>
    </div>
  );
};

export default Todo;
