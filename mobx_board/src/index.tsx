import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import App from "./App";
import todoStore from "./store/todoStore";

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
