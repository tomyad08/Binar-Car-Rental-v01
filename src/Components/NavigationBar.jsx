import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#f1f3ff" }}>
        <div className="col pt-3 ps-4">
          <Link to="/">
            <img
              src="./assets/logoNew.png"
              alt=" "
              style={{ width: "20%" }}
              className="float-start"
            />
          </Link>
        </div>
        <div className="col pe-2 pt-4" id="menu">
          <a
            href="#FAQ"
            className="float-end fs-5 px-2"
            style={{ textDecoration: "none", color: "black" }}
          >
            FAQ
          </a>
          <a
            href="#testimoni"
            className="float-end fs-5 px-2"
            style={{ textDecoration: "none", color: "black" }}
          >
            Testimonial
          </a>
          <a
            href="#whyUs"
            className="float-end fs-5 px-2"
            style={{ textDecoration: "none", color: "black" }}
          >
            Why Us?
          </a>
          <a
            href="#ourServices"
            className="float-end fs-5 px-2"
            style={{ textDecoration: "none", color: "black" }}
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavigationBar;
