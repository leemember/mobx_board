import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import App from "./App";
import boardStore from "./store/BoardService";

ReactDOM.render(
  <Provider boardStore={boardStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
