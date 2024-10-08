import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ScrlTopOfPage from "../components/scrlTopOfPage/ScrlTopOfPage";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <>
      <ScrlTopOfPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
