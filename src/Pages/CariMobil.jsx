import React from "react";
import DaftarMobil from "../Components/DaftarMobil";
import Footer from "../Components/Footer";
import FormCariMobil from "../Components/FormCariMobil";
import Jumbutron from "../Components/Jumbotron";
import NavigationBar from "../Components/NavigationBar";

const CariMobil = () => {
  return (
    <>
      <NavigationBar />
      <Jumbutron isButton={false} />
      <div style={{ position: "relative", top: "-70px" }}>
        <FormCariMobil />
      </div>
      <DaftarMobil />
      <Footer />
    </>
  );
};
export default CariMobil;
