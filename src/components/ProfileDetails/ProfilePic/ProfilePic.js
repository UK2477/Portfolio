import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ProfilePic = () => {
  return (
    <div className="profile-pic-section">
      <div className="profile-pic-inner-section text-center">
        <div className="profile-pic">
          <Image src="./assets/images/profile.png" />
        </div>
        <h3>Denny Johnson</h3>
        <p>Web Designer</p>
        <ul className="ct-list d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <Link to="/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
      <hr className="ct-hr m-0" />
    </div>
  );
};

export default ProfilePic;
