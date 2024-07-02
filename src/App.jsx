import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, Works, About, Contact } from "./pages/index";
import { Footer } from "./components/jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
