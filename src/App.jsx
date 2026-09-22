import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages1/Home";
import Page404 from "./pages1/Page404";
import DevCard from "./apps/devcard/DevCard";
import FlashCard from "./apps/flashcard/FlashCard";
import DateCounter from "./apps/datecounter/DateCounter";
import StepsNavigation from "./apps/stepsnavigation/StepsNavigation";
import TravelList from "./apps/travellist/TravelList";
import Accordion from "./apps/accordion/Accordion";
import TipCalculator from "./apps/tipcalculator/TipCalculator";
import BillSplitter from "./apps/billsplitter/BillSplitter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dev-card" element={<DevCard />} />
          <Route path="/date-counter" element={<DateCounter />} />
          <Route path="/steps-navigation" element={<StepsNavigation />} />
          <Route path="/flash-card" element={<FlashCard />} />
          <Route path="/travel-list" element={<TravelList />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/tip-calculator" element={<TipCalculator />} />
          <Route path="/split-bill" element={<BillSplitter />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
