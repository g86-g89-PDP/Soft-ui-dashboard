import React from "react";

import "../styles/sing_up.css";

const Sing_up = () => {
  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100">
        <div className="container">
          <div className="list">
            <ul className="navbar-nav navbar-nav-hover mx-auto">
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a
                  role="button"
                  className="d-flex justifay-content-betwen cursore-pointer"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <img src="" alt="dropdovn" className="arrow ms-1 d-lg-block" />
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div className="container"></div>
      </section>
    </div>
  );
};

export default Sing_up;
