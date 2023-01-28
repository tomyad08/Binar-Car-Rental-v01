import React from "react";
import Footer from "../Components/Footer";
import Testimoni from "../Components/Testimoni";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <Menu />

      <div style={{ zIndex: "10", marginTop: "130px" }}>
        <Testimoni />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
