import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DeskripsiMobil from "../Components/DeskripsiMobil";
import Footer from "../Components/Footer";
import FormHasilPencarian from "../Components/FormHasilPencarian";
import NavigationBar from "../Components/NavigationBar";

const CarDetail = () => {
  return (
    <>
      <NavigationBar />
      <div className="container-fluid">
        <DeskripsiMobil />
        <Footer />
      </div>
    </>
  );
};
export default CarDetail;
