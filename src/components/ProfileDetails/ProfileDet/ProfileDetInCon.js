import React from "react";

const ProfileDetInCon = ({
  ProfileDetLabel,
  ProfileDetValue,
  ProfileDetClass = "",
}) => {
  return (
    <li
      className={`d-flex align-items-center justify-content-between ${ProfileDetClass}`}>
      <span>{ProfileDetLabel}</span>
      <p>{ProfileDetValue}</p>
    </li>
  );
};

export default ProfileDetInCon;
