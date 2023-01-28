import React from "react";
import Hasil from "../Components/Hasil";
import NavigationBar from "../Components/Navbar";
import Produk from "../Components/Produk";

const Menu = () => {
  return (
    <div className="container-fluid " id="Menu">
      <div
        style={{
          marginLeft: "-12px",
          position: "absolute",
          width: "1263px",
          zIndex: "2",
        }}
      >
        <NavigationBar />
      </div>
      <div className="row ms-1" style={{ position: "relative", top: "80px" }}>
        <div className="col-sm-9 ">
          <Produk />
        </div>
        <div className="col-sm-3 ">
          <Hasil />
        </div>
      </div>
    </div>
  );
};
export default Menu;
