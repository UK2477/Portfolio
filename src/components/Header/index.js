import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome,FaFileCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header-section">
      <div className="main-header-inner-section">
        <div className="main-header-box">
          <Nav className="ct-list">
            <li>
              <NavLink to="/">
                <FaHome />
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <FaFileCode />
              </NavLink>
            </li>
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
