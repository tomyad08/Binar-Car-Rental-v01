import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormHasilPencarian from "./Components/FormHasilPencarian";
import CarDetail from "./Pages/CarDetail";
import CariMobil from "./Pages/CariMobil";
import HasilPencarian from "./Pages/HasilPencarian";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cari-mobil" element={<CariMobil />} />
          <Route path="/hasil-pencarian" element={<HasilPencarian />} />
          <Route path="/car-detail" element={<CarDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
