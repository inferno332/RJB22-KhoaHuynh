import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="container-fluid navbar-nav">
        <li className="nav-item col">
          <Link className="nav-link active" aria-current="page" to='/'>
            Active
          </Link>
        </li>
        <li className="nav-item col">
          <Link className="nav-link" to='/customerForm'>
            Customer Form
          </Link>
        </li>
        <li className="nav-item col">
          <Link className="nav-link" to='/customerList'>
            Customer List
          </Link>
        </li>
        <li className="nav-item col">
          <Link className="nav-link" to='/product'>
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
