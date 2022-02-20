import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import React from "react";
import todoStore from "./store/todoStore";

interface AppProps {
  todoStore?: TodoStore;
}

// @observer는 엇 바꼈네 하고 감지하는 것.
// function 형은 observer를 이런식으로 @ 없이 사용해준다.
const App = observer((props: AppProps, {}) => {
  const store = props.todoStore;
  return <div className="App">{store.todos}</div>;
});

export default inject("counter")(observer(App));
