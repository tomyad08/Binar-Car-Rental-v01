import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BaseURL } from "../utils/Constants";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Hasil = () => {
  const [datas, setDatas] = useState([]);
  const [edits, setEdits] = useState([]);
  const [inputs, setInputs] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setEdits(data);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    try {
      axios.put(BaseURL + `keranjangs/${edits.id}`, {
        jumlah: inputs.jumlah,
        nama: edits.nama,
        totalHarga: inputs.jumlah * edits.totalHarga,
        keterangan: inputs.keterangan,
      });
    } catch (error) {
      console.log("error di bagian put");
    }
  };

  useEffect(() => {
    dataHasil();
  }, []);

  const dataHasil = async () => {
    try {
      const { data } = await axios.get(BaseURL + "keranjangs");
      setDatas(data);
    } catch (error) {
      console.log("error dataHasil", error);
    }
  };

  const numbers = datas.map((data) => data.totalHarga);
  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);

  const hapusData = () => {
    axios.delete(BaseURL + `keranjangs/${edits.id}`);
    setShow(false);
  };

  return (
    <div id="gantiFont" className="mt-3">
      <div id="pesanan" className="rounded-1 border border-1">
        <h3 className="text-center pt-2">
          <strong>Pesanan</strong>
        </h3>
        <div className="mx-2 ">
          {datas ? (
            <div className="coloumn mb-2">
              {datas.map((data) => (
                <div
                  key={data.id}
                  className="col mb-2 rounded-1"
                  onClick={() => handleShow(data)}
                  id="hasil"
                >
                  <span className="float-start me-3">{data.jumlah}</span>
                  <span className="float-center">{data.nama}</span>
                  <span className="float-end">{data.totalHarga}</span>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>

        <h5 className="pt-2 ps-2">
          <strong>Total Pembayaran:</strong>
        </h5>
        <h5 className="ps-2">Rp. {sum}</h5>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>{edits.nama}</h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-floating mb-3" style={{ width: "20%" }}>
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  name="jumlah"
                  value={inputs.jumlah || " "}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Jumlah</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  name="keterangan"
                  value={inputs.keterangan || " "}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Keterangan</label>
              </div>
            </div>
            <button
              className="btn"
              style={{
                backgroundColor: "#433131 ",
                color: "#FFFFFF",
                border: "0px",
              }}
              onClick={hapusData}
            >
              Batalkan Pemesanan
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: "#E9B639 ",
                color: "#000000",
                border: "0px",
              }}
              onSubmit={handleSubmit}
              type="submit"
              onClick={handleClose}
            >
              Save Changes
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Hasil;
