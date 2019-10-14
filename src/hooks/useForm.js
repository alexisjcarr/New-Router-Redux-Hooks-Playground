import { useState } from "react";

export const useForm = state => {
  const [input, setInput] = useState(state);

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...input,
      [name]: value
    }));
  };

  return [input, handleChange, setInput];
};
