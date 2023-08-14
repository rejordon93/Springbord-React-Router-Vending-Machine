import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home"; // Correct the import path
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/sardines" element={<Sardines />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
