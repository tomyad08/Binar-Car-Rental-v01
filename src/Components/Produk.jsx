import React, { useState } from "react";
import axios from "axios";
import { BaseURL } from "../utils/Constants";
import { useEffect } from "react";

const Produk = () => {
  const [loading, setLoading] = useState(false);
  const [produk, setProduk] = useState([]);
  const [searchNama, setSearchNama] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(BaseURL + "products");
      setProduk(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);
  console.log(produk);

  function handlePilihan(data) {
    const keranjang = {
      jumlah: 1,
      nama: data.nama,
      harga: data.harga,
      totalHarga: data.harga,
      keterangan: null,
    };
    axios.post(BaseURL + "keranjangs", keranjang);
  }

  return (
    <div className="mt-3">
      <div className="row rounded-1 pt-3 border border-1" id="skala">
        <div class="form-floating mb-3">
          <input
            style={{ width: "100%" }}
            type="text"
            className="form-control mb-3"
            id="floatingInput"
            placeholder="Menu"
            onChange={(e) => setSearchNama(e.target.value)}
          />
          <label htmlFor="floatingInput" className="ps-4 fw-6">
            Mau nyari apa nih?
          </label>
        </div>
        {loading ? (
          <h4>Loading ...</h4>
        ) : produk ? (
          produk
            .filter((value) => {
              if (searchNama === "") {
                return value;
              } else if (
                value.nama.toLowerCase().includes(searchNama.toLowerCase())
              ) {
                return value;
              } else if (
                value.category.nama
                  .toLowerCase()
                  .includes(searchNama.toLowerCase())
              ) {
                return value;
              }
            })
            .map((data) => (
              <div className="col-sm-3  mb-3 ">
                <div
                  key={data.id}
                  className="card"
                  onClick={() => handlePilihan(data)}
                >
                  <img
                    src={
                      "assets/images/" + data.category.nama + "/" + data.gambar
                    }
                    className="card-img-top"
                    alt="..."
                    style={{ height: "140px", overflow: "hidden" }}
                    id="gambarProduk"
                  />
                  <div className="card-body" style={{ lineHeight: "2px" }}>
                    <h6 className="card-title">{data.nama}</h6>
                    <p id="harga">harga: {data.harga}</p>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Produk;
