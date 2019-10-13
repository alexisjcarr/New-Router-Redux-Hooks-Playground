import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./types";

export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};
