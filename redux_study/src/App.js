import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Input from "./Input";
import reducer from "./reducer";
import TodoList from "./components/TodoList";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Input />
      <TodoList/>
    </Provider>
  );
};

export default App;
