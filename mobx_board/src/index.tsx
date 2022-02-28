import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import App from "./App";
import {Board} from "./store/BoardService";

ReactDOM.render(
  <Provider boardStore={Board}>
    <App />
  </Provider>,
  document.getElementById("root")
);
