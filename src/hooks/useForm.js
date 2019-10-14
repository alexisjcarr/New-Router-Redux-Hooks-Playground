import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../store/actions";

export const useForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return [input, handleChange, handleSubmit];
};
