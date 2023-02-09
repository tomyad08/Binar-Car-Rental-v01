import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import FormHasilPencarian from "../Components/FormHasilPencarian";
import NavigationBar from "../Components/NavigationBar";

const HasilPencarian = () => {
  const [mobil, setMobil] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${nama}`
      )
      .then((res) => {
        setMobil(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);
  const handlePilihan = (value) => {
    const nilai = value;
    navigate("/car-detail", {
      state: nilai,
    });
  };
  const data = location.state;

  const nama = data.nama;

  return (
    <div>
      <NavigationBar />
      <FormHasilPencarian dataPesanan={data} />
      <div className="row pt-5 container-fluid" id="gambarMobil">
        {mobil.map((value) => (
          <>
            <div
              className="col-md-2 border border-2 rounded-2 mb-2 float-center"
              style={{ overflow: "hidden" }}
              id="cardMobilSearch"
              key={value.id}
            >
              <img
                src={value.image}
                alt=" "
                style={{ width: "115%", height: "155px", marginLeft: "-12px" }}
              />
              <h5>{value.name}</h5>
              <p style={{ lineHeight: "5px" }}>Rp. {value.price}</p>
              <p>Lorem ipsum, dolor sit amet consectetur ...</p>
              <button
                className="btn btn-success mb-2"
                style={{ width: "100%" }}
                onClick={() => handlePilihan(value)}
              >
                Pilih Mobil
              </button>
            </div>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default HasilPencarian;
