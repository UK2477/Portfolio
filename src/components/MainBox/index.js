import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Education from "./Education";
import History from "./History";
import Portfolio from "./Portfolio";

const MainBox = () => {
  return (
    <div>
      <Routes>
      <Route path="/index.html" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/education" element={<Education />} />
        <Route path="/history" element={<History />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default MainBox;
