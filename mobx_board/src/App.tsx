import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Details from "./pages/Details";
import Write from "./pages/Write";
import Update from "./pages/Update";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/write" element={<Write />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
