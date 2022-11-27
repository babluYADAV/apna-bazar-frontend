import * as React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger p-3 mb-8 ">
      <div className="container-fluid">
        <h3 className="navbar-brand" style={{ color: "white" }}>
          Apna Bazar
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "white" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li
            className="nav-item"
            style={{
              marginRight: "25px",
              background: "white",
              height: "44px",
              width: "44px",
              borderRadius: "22px",
              border: "2px solid black",
              cursor: "pointer",
            }}
          ></li>
          <li className="nav-item">
            <i
              className="fa"
              style={{ fontSize: "28px", color: "white", cursor: "pointer" }}
            >
              &#xf07a;
            </i>
            <span className="badge badge-warning" id="lblCartCount">
              {" "}
              5{" "}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
