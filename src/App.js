import "./App.css";
import Home from "./Components/Home/Home.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
