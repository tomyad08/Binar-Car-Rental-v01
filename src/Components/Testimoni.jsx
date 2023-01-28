import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  items: 4,
};

const Testimoni = () => {
  // class Hello extends React.Component {
  //   render() {
  return (
    <div id="Testimoni">
      <div id="gantiFont">
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
        <div
          className="item border border-1 mb-2 mx-2 rounded-2 p-2"
          id="corousel"
        >
          <div className="d-flex align-items-center">
            <div className="flex-1 px-1 pb-1">
              <img
                src="./assets/1.jpg"
                className="tes-photo"
                style={{ width: "5em", display: "block" }}
                alt="user"
                id="gambar"
              />
            </div>
            <div className="flex-3 px-1 pt-4">
              <p className="text-left">
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem numquam assumenda corrupti architecto officiis ab,
                  eveniet quis maiores earum omnis similique illo nostrum magni
                  placeat! Veritatis nemo commodi fugit cum.
                </q>
              </p>
              <h6 className="text-left">John Dee 32, Bromo</h6>
            </div>
          </div>
        </div>
        <div
          className="item border border-1 rounded-2 p-2 mx-2 mb-2"
          id="corousel"
        >
          <div className="d-flex align-items-center">
            <div className="flex-1 px-1 pb-1">
              <img
                src="./assets/2.jpg"
                className="tes-photo"
                style={{ width: "5em", display: "block" }}
                alt="user"
                id="gambar"
              />
            </div>
            <div className="flex-3 px-1 pt-4">
              <p className="text-left">
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem numquam assumenda corrupti architecto officiis ab,
                  eveniet quis maiores earum omnis similique illo nostrum magni
                  placeat! Veritatis nemo commodi fugit cum.
                </q>
              </p>
              <h6 className="text-left">John Dee 32, Bromo</h6>
            </div>
          </div>
        </div>
        <div
          className="item border border-1 rounded-2 p-2 mx-2 mb-2"
          id="corousel"
        >
          <div className="d-flex align-items-center">
            <div className="flex-1 px-1 pb-1">
              <img
                src="./assets/3.jpg"
                className="tes-photo"
                style={{ width: "5em", display: "block" }}
                alt="user"
                id="gambar"
              />
            </div>
            <div className="flex-3 px-1 pt-4">
              <p className="text-left">
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem numquam assumenda corrupti architecto officiis ab,
                  eveniet quis maiores earum omnis similique illo nostrum magni
                  placeat! Veritatis nemo commodi fugit cum.
                </q>
              </p>
              <h6 className="text-left">John Dee 32, Bromo</h6>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Testimoni;
