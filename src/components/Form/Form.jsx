import React from "react";
import { useDispatch } from "react-redux";

import { useForm } from "../../hooks";

import { clearCompleted } from "../../store/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [input, handleChange, handleSubmit] = useForm();

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input name="todo" type="text" value={input} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      <br />
      <button onClick={() => dispatch(clearCompleted())}>
        remove completed
      </button>
    </>
  );
};

export default Form;
