import React, { useState } from "react";
import BoxBiru from "../Components/BoxBiru";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Jumbutron from "../Components/Jumbotron";
import NavigationBar from "../Components/NavigationBar";
import NyobaTestimoni from "../Components/NyobaTestimoni";
import OurServices from "../Components/OurServices";
import WhyUs from "../Components/WhyUs";

const Home = () => {
  const [nav, setNav] = useState(false);
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
          onClick={() => setNav(!nav)}
        />
        {nav && (
          <div
            style={{
              width: "150px",
              height: "400px",
              backgroundColor: "white",
              position: "absolute",
              top: "-30px",
              left: "230px",
              paddingTop: "50px",
              paddingLeft: "20px",
              zIndex: "3",
            }}
          >
            <h6 className="float-end pe-3" onClick={() => setNav(!nav)}>
              X
            </h6>
            <a
              href="#ourServices"
              className="fs-5 px-2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>Our Servives</h6>
            </a>
            <a
              href="#whyUs"
              className="fs-5 px-2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>Why Us?</h6>
            </a>
            <a
              href="#testimoni"
              className="fs-5 px-2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>Testimonial</h6>
            </a>
            <a
              href="#FAQ"
              className=" fs-5 px-2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6>FAQ</h6>
            </a>
          </div>
        )}
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
