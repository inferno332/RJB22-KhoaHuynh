import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    // <nav className="navbar navbar-expand-sm bg-light navbar-light">
    //   <div className="container-fluid">
    //     <ul className="navbar-nav">
    // <li className="nav-item">
    //   <Link className="nav-link active" aria-current="page" to="/">
    //     Home
    //   </Link>
    // </li>
    // <li className="nav-item">
    //   <Link className="nav-link" to="/customerForm">
    //     Customer Form
    //   </Link>
    // </li>
    // <li className="nav-item">
    //   <Link className="nav-link" to="/customerList">
    //     Customer List
    //   </Link>
    // </li>
    // <li className="nav-item">
    //   <Link className="nav-link" to="/productList">
    //     Product List
    //   </Link>
    // </li>
    // <li className="nav-item">
    //   <Link className="nav-link" to="/productForm">
    //     Product Form
    //   </Link>
    // </li>
    //     </ul>
    //   </div>
    // </nav>

    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
        style={{ zIndex: 2000 }}
      >
        <div className="container-fluid">
          {/* Navbar brand */}
          <Link className="nav-link active" aria-current="page" to="/">
            <strong>Home</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/customerForm">
                  Customer Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customerList">
                  Customer List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productList">
                  Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productForm">
                  Product Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navigation;
