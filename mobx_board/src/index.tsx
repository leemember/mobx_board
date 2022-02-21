import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import App from "./App";
import boardStore from "./store/boardStore";

ReactDOM.render(
  <Provider boardStore={boardStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
