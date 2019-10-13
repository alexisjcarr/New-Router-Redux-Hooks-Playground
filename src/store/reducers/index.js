import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions";

import uuid from "uuid";

const initialState = {
  todos: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: uuid.v1(),
            completed: false
          }
        ]
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
        })
      };

    default:
      return state;
  }
};
