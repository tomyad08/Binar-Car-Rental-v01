import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FormHasilPencarian = (props) => {
  const [inputs, setInputs] = useState([]);
  const [pesan, setPesan] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setPesan(props.dataPesanan);
  });
  return (
    <div className="container-fluid">
      <form
        onSubmit={handleSubmit}
        className="border border-2 rounded-2 p-4 mx-5"
        id="formulir"
        style={{ backgroundColor: "white" }}
      >
        <div className="row" id="formulir1">
          <div className="col-md-4 ">
            <label className="form-label">Nama Mobil</label>
            <input
              type="text"
              name="nama"
              value={inputs.nama || " " + pesan.nama}
              onChange={handleChange}
              className="form-control"
              placeholder="Ketik nama/tipe mobil"
            />
          </div>
          <div className="col-md-3 ">
            <label className="form-label">Kategori</label>
            <select
              className="form-select form-select"
              aria-label=".form-select example"
              name="kategori"
              value={inputs.kategori || pesan.kategori}
              onChange={handleChange}
            >
              <option selected>Masukan kapasitas mobil</option>
              <option value="small">2-4 orang</option>
              <option value="medium">4-6 orang</option>
              <option value="large">6-8 orang</option>
            </select>
          </div>
          <div className="col-md-3 ">
            <label className="form-label">Harga</label>
            <select
              className="form-select form-select"
              aria-label=".form-select example"
              name="harga"
              value={inputs.harga || pesan.harga}
              onChange={handleChange}
            >
              <option selected>Masukan harga sewa perhari</option>
              <option value="cheap"> &lt; Rp. 400.000</option>
              <option value="medium">Rp. 400.000 - Rp. 600.000</option>
              <option value="expensive">&gt; Rp. 600.000</option>
            </select>
          </div>
          <div className="col-md">
            <Link to="/cari-mobil">
              <button
                className="btn btn-primary px-5"
                style={{ marginTop: "30px" }}
                type="submit"
                id="sub"
              >
                Edit
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormHasilPencarian;
