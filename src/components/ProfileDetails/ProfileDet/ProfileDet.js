import React from "react";
import ProfileDetInCon from "./ProfileDetInCon";

const ProfileDet = () => {
  const ProfileDetIn = [
    {
      ProfileDetLabel: "Age:",
      ProfileDetValue: "22",
    },
    {
      ProfileDetLabel: "Residence:",
      ProfileDetValue: "BD",
    },
    {
      ProfileDetLabel: "Freelance:",
      ProfileDetValue: "Available",
      ProfileDetClass: "active",
    },
    {
      ProfileDetLabel: "Address:",
      ProfileDetValue: "Surat, India",
    },
  ];
  return (
    <>
      <div className="profile-det">
        <ul className="ct-list">
          {ProfileDetIn.map((item) => {
            return <ProfileDetInCon key={item.ProfileDetLabel} {...item} />;
          })}
        </ul>
      </div>
      <hr className="ct-hr m-0" />
    </>
  );
};

export default ProfileDet;
