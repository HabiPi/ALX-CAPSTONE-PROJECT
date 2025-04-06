import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import AddPlanModal from "./components/AddPlanModal";

function App() {
  return <div className="h-screen bg-green-800">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/add-plan" element={<AddPlanModal />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
