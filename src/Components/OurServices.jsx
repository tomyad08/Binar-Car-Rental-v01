import React from "react";

const OurServices = () => {
  return (
    <>
      <div className="container fluid" id="ourServices">
        <div className="row mt-3">
          <div className="col-md">
            <img
              src="./assets/img_service.png"
              alt=" "
              style={{ width: "80%" }}
              className="float-center"
            />
          </div>
          <div className="col-md px-4" style={{ paddingTop: "5%" }}>
            <h3>
              <strong>
                Best Car Rental for any kind of trip in (Lokasimu)!
              </strong>
            </h3>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div>
              <span>
                <img src="./assets/Group53.png" alt="" />
              </span>
              <span className="ms-2">
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </span>
            </div>
            <div>
              <span>
                <img src="./assets/Group53.png" alt="" />
              </span>
              <span className="ms-2">
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </span>
            </div>
            <div>
              <span>
                <img src="./assets/Group53.png" alt="" />
              </span>
              <span className="ms-2">Sewa Mobil Jangka Panjang Bulanan</span>
            </div>
            <div>
              <span>
                <img src="./assets/Group53.png" alt="" />
              </span>
              <span className="ms-2">
                Gratis Antar - Jemput Mobil di Bandara
              </span>
            </div>
            <div>
              <span>
                <img src="./assets/Group53.png" alt="" />
              </span>
              <span className="ms-2">
                Layanan Airport Transfer / Drop In Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurServices;
