import React from "react";

import TodoList from "../Todo";
import Form from "../Form";

import "./App.scss";

const App = () => (
  <div className="App">
    <TodoList />
    <Form />
  </div>
);

export default App;
