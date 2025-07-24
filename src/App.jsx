import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import MiniCart from "./apps/MiniCart/MiniCart";
import QuizApp from "./apps/QuizApp/QuizApp";
import ToDoApp from "./apps/ToDoApp/ToDoApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/minicart" element={<MiniCart />}></Route>
        <Route path="/quizapp" element={<QuizApp />}></Route>
        <Route path="/todoapp" element={<ToDoApp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
