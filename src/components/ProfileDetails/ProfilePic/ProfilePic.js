import React from "react";
import { Image } from "react-bootstrap";
import ProfileImg from "../../../assets/images/profile.png";

const ProfilePic = () => {
  return (
    <div className="profile-pic-section">
      <div className="profile-pic-inner-section text-center">
        <div className="profile-pic">
          <Image src={ProfileImg} />
        </div>
        <h3>Denny Johnson</h3>
        <p>Web Designer</p>
      </div>
    </div>
  );
};

export default ProfilePic;
