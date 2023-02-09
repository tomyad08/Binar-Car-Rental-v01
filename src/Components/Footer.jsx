import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid" id="footer">
        <div className="row mx-4 mt-5">
          <div className="col-md">
            <p>
              <strong>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </strong>
            </p>
            <p>
              <strong>binarcarrental@gmail.com</strong>
            </p>
            <p>
              <strong>081-233-334-808</strong>
            </p>
          </div>
          <div className=" col-md text-start">
            <h6>
              <a
                href="#ourServices"
                className="float-center"
                style={{ textDecoration: "none", color: "black" }}
              >
                Our Services
              </a>
            </h6>

            <h6>
              <a
                href="#whyUs"
                className="float-center"
                style={{ textDecoration: "none", color: "black" }}
              >
                Why Us
              </a>
            </h6>

            <h6>
              <a
                href="#testimoni"
                className="float-center"
                style={{ textDecoration: "none", color: "black" }}
              >
                Testimonial
              </a>
            </h6>

            <h6>
              <a
                href="#FAQ"
                className="float-center"
                style={{ textDecoration: "none", color: "black" }}
              >
                FAQ
              </a>
            </h6>
          </div>
          <div className="col-md ">
            <p>
              <strong>Connect with us</strong>
            </p>
            <span className="mx-1">
              <img src="./assets/icon_facebook.png" alt=" " />
            </span>
            <span className="mx-1">
              <img src="./assets/icon_instagram.png" alt=" " />
            </span>
            <span className="mx-1">
              <img src="./assets/icon_twitter.png" alt=" " />
            </span>
            <span className="mx-1">
              <img src="./assets/icon_twitch.png" alt=" " />
            </span>
            <span className="mx-1">
              <img src="./assets/icon_facebook.png" alt=" " />
            </span>
          </div>
          <div className="col-md">
            <p>
              <strong>Copyright Binar 2022</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
