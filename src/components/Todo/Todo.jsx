import React from "react";
import { useDispatch } from "react-redux";

import { removeTodo, toggleTodo } from "../../store/actions";

const Todo = ({ task, id, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <h4>{task}</h4>
      {completed ? <p>completed</p> : <p>not completed</p>}
      {completed ? (
        <h1>
          <i
            className="fas fa-toggle-on"
            onClick={() => dispatch(toggleTodo(id))}
          ></i>{" "}
        </h1>
      ) : (
        <h1>
          <i
            className="fas fa-toggle-off"
            onClick={() => dispatch(toggleTodo(id))}
          ></i>{" "}
        </h1>
      )}
      <h1>
        <i
          className="far fa-trash-alt"
          onClick={() => dispatch(removeTodo(id))}
        ></i>
      </h1>
    </div>
  );
};

export default Todo;
