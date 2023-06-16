import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaHome, FaFileCode } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Header = () => {
  const renderTooltip = (props, name) => (
    <Tooltip id="button-tooltip" {...props}>
      {name}
    </Tooltip>
  );
  return (
    <header className="main-header-section">
      <div className="main-header-inner-section">
        <div className="main-header-box">
          <ul className="ct-list nav">
            <li>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, "Home")}>
                <NavLink to="/">
                  <FaHome />
                </NavLink>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, "Service")}>
                <NavLink to="/service">
                  <FaFileCode />
                </NavLink>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, "Education")}>
                <NavLink to="/education">
                  <IoSchoolSharp />
                </NavLink>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, "History")}>
                <NavLink to="/history">
                  <MdOutlineWorkHistory />
                </NavLink>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, "Portfolio")}>
                <NavLink to="/portfolio">
                  <GrDocumentUser />
                </NavLink>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
