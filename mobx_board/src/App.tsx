import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Details from "./pages/Details";
import Write from "./pages/Write";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/detail/:id" component={Details} />
        <Route path="/write" component={Write} />
      </Switch>
    </Router>
  );
};

export default App;
