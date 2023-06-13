import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";

const MainBox = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default MainBox;
