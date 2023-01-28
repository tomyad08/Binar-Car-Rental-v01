import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BaseURL } from "../utils/Constants";


const KategoriProduk = () => {
  const [kategori, setKategori] = useState([]);
  const [katPilihan, setKatPilihan] = useState([])
  useEffect(() => {
    DataKategori();
  }, []);

  const DataKategori = async () => {
    try {
      const { data } = await axios.get(BaseURL + "categories");
      setKategori(data);
    } catch (error) {
      console.log("error nih", error);
    }
  };

  const pilKat = (data)=>{
    setKatPilihan(data)
  }
  
  return (
    <div id="gantiFont" className="text-center mt-3">
      <h3>
        <strong>Kategori</strong>{" "}
      </h3>
      <div className="coloumn">
        {kategori ? (
          kategori.map((data) => (
            <div className="col-11 border border-1 rounded-2 px-3 pt-2 fs-7 mb-1">
              <p key={data.id} onClick={() => pilKat(data.nama)}>
                {data.nama}
              </p>
            </div>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </div>
  );
};
export default KategoriProduk;
