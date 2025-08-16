import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./Pages/404.jsx";
import Home from "./Pages/Home";
import DevCard from "./apps/DevCard/DevCard.jsx";
import DateCounter from "./apps/DateCounter/DateCounter";
import FlashCard from "./apps/FlashCard/FlashCard";
import StepsNavigation from "./apps/StepsNavigation/StepsNavigation";
import TravelList from "./apps/TravelList/TravelList";
import Accordion from "./apps/Accordion/Accordion";
import TipCalculator from "./apps/TipCalculator/TipCalculator.jsx";
import EatSplit from "./apps/EatSplit/EatSplit.jsx";

// import TipCalculator from "./apps/BillSplitter/BillSplitter.jsx";

import MiniCart from "./apps/MiniCart/MiniCart";
import QuizApp from "./apps/QuizApp/QuizApp";
import ToDoApp from "./apps/ToDoApp/ToDoApp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devcard" element={<DevCard />} />
        <Route path="/datecounter" element={<DateCounter />} />
        <Route path="/flashcard" element={<FlashCard />} />
        <Route path="/stepsnavigation" element={<StepsNavigation />} />
        <Route path="/travellist" element={<TravelList />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/tip-calculator" element={<TipCalculator />} />
        <Route path="/eat-split" element={<EatSplit />} />

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
