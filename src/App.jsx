import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./Pages/404.jsx";
import Home from "./Pages/Home";
import MiniCart from "./apps/MiniCart/MiniCart";
import QuizApp from "./apps/QuizApp/QuizApp";
import ToDoApp from "./apps/ToDoApp/ToDoApp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minicart" element={<MiniCart />} />
        <Route path="/quizapp" element={<QuizApp />} />
        <Route path="/todoapp" element={<ToDoApp />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
