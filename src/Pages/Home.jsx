import React from "react";
import BoxBiru from "../Components/BoxBiru";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Jumbutron from "../Components/Jumbotron";
import NavigationBar from "../Components/NavigationBar";
import NyobaTestimoni from "../Components/NyobaTestimoni";
import OurServices from "../Components/OurServices";
import WhyUs from "../Components/WhyUs";

const Home = () => {
  return (
    <div>
      <div>
        <NavigationBar />
        <img
          src="./assets/fi_menu.png"
          alt=" "
          style={{
            width: "35px",
            position: "relative",
            top: "-45px",
            left: "85%",
          }}
          id="sandwich"
        />
      </div>
      <div id="konten">
        <Jumbutron isButton={true} />
        <OurServices />
        <WhyUs />
        <NyobaTestimoni />
        <BoxBiru />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
