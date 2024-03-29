import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayslipList from "./components/PayslipList";
import PayslipDetail from "./components/PayslipDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PayslipList />} />
        <Route path="/payslip/:id" element={<PayslipDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
