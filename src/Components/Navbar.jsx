import React from "react";

const NavigationBar = () => {
  return (
    <div className="px-2 " style={{ backgroundColor: "#433131" }}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid" style={{ backgroundColor: "#433131" }}>
          <a
            className="navbar-brand fs-2"
            style={{
              color: "#FFFFFF",
            }}
            href="#"
          >
            <strong>
              War<span style={{ color: "#E9B639 " }}>Coff</span>
            </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon border border-1 rounded-2 p-1"
              style={{
                backgroundColor: "#E9B639",
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse me-3" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fs-5">
                <a
                  className="nav-link border border-1 rounded-2 "
                  style={{ backgroundColor: "#E9B639" }}
                  aria-current="page"
                  href="#Menu"
                >
                  <strong>Menu</strong>
                </a>
              </li>
              <li className="nav-item fs-5">
                <a
                  className="nav-link"
                  style={{
                    color: "#FFFFFF",
                  }}
                  href="#Testimoni"
                >
                  Testimoni
                </a>
              </li>

              <li className="nav-item fs-5">
                <a
                  className="nav-link"
                  style={{
                    color: "#FFFFFF",
                  }}
                  href="#Kontak"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;
