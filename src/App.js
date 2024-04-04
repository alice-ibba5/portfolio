import "./App.css";
import Home from "./Components/Home/Home.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Prodotti from "./Components/Prodotti/Prodotti.js";
import Biblioteca from "./Components/Biblioteca/Biblioteca.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/storeProdotti" exact element={<Prodotti />} />
        <Route path="/biblioteca" exact element={<Biblioteca />} />
      </Routes>
    </Router>
  );
}

export default App;
