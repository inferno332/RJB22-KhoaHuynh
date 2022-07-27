import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className='navbar navbar-expand-lg'>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  List
                </Link>
              </li>
              </ul>
    </div>
  )
}
