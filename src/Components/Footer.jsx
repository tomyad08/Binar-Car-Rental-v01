import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid mx-1 d-flex justify-content-around mt-5"
      id="Kontak"
    >
      <div>
        <p>
          <strong>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</strong>
        </p>
        <p>
          <strong>Warcoff@gmail.com</strong>
        </p>
        <p>
          <strong>081-233-334-808</strong>
        </p>
      </div>
      <div>
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
      <div>
        <p className="me-5 pe-4">
          <strong>Copyright Warcoff 2022</strong>
        </p>
      </div>
    </div>
  );
};
export default Footer;
