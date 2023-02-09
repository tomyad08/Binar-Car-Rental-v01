import React from "react";
import { Link } from "react-router-dom";

const BoxBiru = () => {
  return (
    <>
      <div
        className="border rounded-2 p-5"
        style={{
          backgroundColor: "#0D28A6",
          width: "90%",
          margin: "0 auto",
          textAlign: "center",
          color: "white",
        }}
        id="boxBiru"
      >
        <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          numquam voluptate est facere possimus eligendi! Praesentium culpa
          architecto explicabo temporibus hic vero dolorum minus? Illum
          molestiae sapiente ipsa consectetur autem.
        </p>
        <Link to="/cari-mobil">
          <button className="btn btn-success rounded-2">
            Mulai Sewa Mobil
          </button>
        </Link>
      </div>
    </>
  );
};
export default BoxBiru;
