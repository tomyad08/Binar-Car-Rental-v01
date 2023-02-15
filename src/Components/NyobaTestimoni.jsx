import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// const options = {
//   items: 4,
// };

const Testimoni = () => {
  const dataTestimoni = [
    {
      id: "1",
      gambar: "./assets/1.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis praesentium ipsum delectus nesciunt labore! Aut fugit unde ea labore modi assumenda nemo mollitia. Hic vero libero dignissimos, consequuntur nobis neque. Quod cum veniam dicta aliquam fugit assumenda?",
      nama: "John Dee 32, Bromo",
    },
    {
      id: "2",
      gambar: "./assets/2.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis praesentium ipsum delectus nesciunt labore! Aut fugit unde ea labore modi assumenda nemo mollitia. Hic vero libero dignissimos, consequuntur nobis neque. Quod cum veniam dicta aliquam fugit assumenda?",
      nama: "Bruce Lee 12, Nganjuk",
    },
    {
      id: "3",
      gambar: "./assets/3.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis praesentium ipsum delectus nesciunt labore! Aut fugit unde ea labore modi assumenda nemo mollitia. Hic vero libero dignissimos, consequuntur nobis neque. Quod cum veniam dicta aliquam fugit assumenda?",
      nama: "Buah Jatuh 25, Cianjur",
    },
    {
      id: "4",
      gambar: "./assets/4.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis praesentium ipsum delectus nesciunt labore! Aut fugit unde ea labore modi assumenda nemo mollitia. Hic vero libero dignissimos, consequuntur nobis neque. Quod cum veniam dicta aliquam fugit assumenda?",
      nama: "Joni 32, Bromo",
    },
  ];

  return (
    <div id="testimoni">
      <div className="px-4 mt-4">
        <h2 className="text-center">
          <strong>Testimonial</strong>
        </h2>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint totam,
          quae cum reprehenderit quam error commodi culpa hic iusto animi!
        </p>
      </div>
      <OwlCarousel
        className="owl-theme"
        center={true}
        loop={true}
        margin={10}
        nav={true}
        dots={false}
        autoplay={true}
        autoplayTimeout={4000}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        }}
      >
        {dataTestimoni.map((value) => (
          <div
            className="item border border-1 mb-2 mx-2 rounded-2 p-2"
            id="corousel"
            style={{ backgroundColor: "#f1f3ff" }}
          >
            <div className="d-md-flex align-items-center">
              <div className="flex-md-1 px-1 pb-1">
                <img
                  src={value.gambar}
                  style={{
                    width: "5em",
                    display: "block",
                    borderRadius: "40px",
                  }}
                  id="gambarTestimoni"
                  alt="user"
                />
              </div>
              <div className="flex-md-3 px-1 pt-4">
                <p>
                  <img
                    src={value.star}
                    alt=""
                    style={{ width: "20%" }}
                    id="star"
                  />
                  <q style={{ textAlign: "justify" }}>{value.deskripsi}</q>
                </p>
                <h6 className="text-left">{value.nama}</h6>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Testimoni;
