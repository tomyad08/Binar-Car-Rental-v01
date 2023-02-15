import React from "react";
import { Link } from "react-router-dom";

const Jumbutron = (props) => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#f1f3ff" }}>
        <div className="col-md ">
          <p className="px-4" style={{ paddingTop: "5%" }}>
            <h2>
              <strong>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {props.isButton && (
              <Link to="/cari-mobil">
                <button className="btn btn-success">Mulai Sewa Mobil</button>
              </Link>
            )}
          </p>
        </div>
        <div className="col-md ">
          <img
            src="./assets/img_car.png"
            alt=" "
            style={{ width: "100%", position: "relative", bottom: "-0.4%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Jumbutron;
