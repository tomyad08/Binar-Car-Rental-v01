import React from "react";
import { useLocation } from "react-router-dom";

const DeskripsiMobil = () => {
  const location = useLocation();
  const nilai = location.state;
  console.log(nilai);

  return (
    <>
      <div className="row mt-4" style={{ width: "90%", margin: "0 auto" }}>
        <div className="col-md border border-1 rounded-2 ">
          <h6 className="mb-4 fw-bold">Tentang Paket</h6>
          <h6 className="fw-bold">Include</h6>
          <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <h6 className="fw-bold">Exclude</h6>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <h6 className="fw-bold">Refund, Reschedule, Overtime</h6>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
        <div className="col-md mt-2">
          <div className="px-3">
            <img
              src={nilai.image}
              alt=" "
              style={{ width: "70%" }}
              className="border border-0 rounded-2"
            />
            <h5 className="pt-2">{nilai.name}</h5>
            <p>
              <strong>Total harga:</strong> Rp. {nilai.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeskripsiMobil;
