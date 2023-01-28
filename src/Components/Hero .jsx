import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundColor: "#433131",
      }}
    >
      <div className="row container-fluid px-3">
        <div className="col my-auto" style={{ color: "#ffff" }}>
          <h1
            style={{ fontSize: "4vw", fontFamily: "'Concert One', cursive" }}
            id="h1nih"
          >
            Maniskan harimu dengan Do&
            <span style={{ color: "#E9B639" }}>nut</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vel
            dolor eum tenetur facilis magni cumque temporibus nisi repellat ea.
          </p>
          <div className="d-flex">
            <div className="pt-2">
              <h4>Buka:</h4>
            </div>
            <div>
              <h4
                className="ms-2 p-2 border border-0 rounded-2 fw-5"
                style={{
                  backgroundColor: " #E9B639",
                  borderColor: "#000000",
                  color: "#000000",
                }}
              >
                <strong>08.00 - 17.00 WIB</strong>
              </h4>
            </div>
          </div>
          <div></div>
        </div>
        <div className="col pt-3 ">
          <img
            src="./assets/GD.png"
            alt="donut"
            style={{ width: "500px", height: "420px" }}
          />
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L30,96C60,128,120,192,180,218.7C240,245,300,235,360,234.7C420,235,480,245,540,234.7C600,224,660,192,720,170.7C780,149,840,139,900,112C960,85,1020,43,1080,69.3C1140,96,1200,192,1260,208C1320,224,1380,160,1410,128L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default Hero;
