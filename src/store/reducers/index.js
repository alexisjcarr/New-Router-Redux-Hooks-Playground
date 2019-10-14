import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED
} from "../actions";

import uuid from "uuid";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    {
      task: "Add todos",
      id: 1,
      completed: false
    },
    {
      task: "Fix this damn bug",
      id: 2,
      completed: false
    },
    {
      task: "Be okay with bugs",
      id: 3,
      completed: false
    }
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoArr = [
        ...state.todos,
        {
          task: action.payload,
          id: uuid.v1(),
          completed: false
        }
      ];

      localStorage.setItem("todos", JSON.stringify(newTodoArr));

      return {
        ...state,
        todos: newTodoArr
      };

    case REMOVE_TODO:
      const filteredList = state.todos.filter(
        todo => todo.id !== action.payload
      );

      localStorage.setItem("todos", JSON.stringify(filteredList));

      return {
        ...state,
        todos: filteredList
      };

    case TOGGLE_TODO:
      const toggledList = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

      localStorage.setItem("todos", toggledList);

      return {
        ...state,
        todos: toggledList
      };

    case CLEAR_COMPLETED:
      const clearedList = state.todos.filter(todo => !todo.completed);

      localStorage.setItem("todos", clearedList);

      return {
        ...state,
        todos: clearedList
      };

    default:
      return state;
  }
};
