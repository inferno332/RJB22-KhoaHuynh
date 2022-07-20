import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>
            Active
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/customerForm'>
            Customer Form
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/customerList'>
            Customer List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/product'>
            Product
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
