import React from "react";
import ProfilePic from "./ProfilePic/ProfilePic";
import ProfileDet from "./ProfileDet/ProfileDet";
import LangProg from "./LangProg/LangProg";
import SkillsProg from "./SkillsProg/SkillsProg";
import ExtraSkills from "./ExtraSkills/ExtraSkills";
import CVButton from "./CVButton/CVButton";

const ProfileDetails = () => {
  return (
    <div className="ProfileDetails-main-slider">
      <div className="ProfileDetails-main-slider-top">
        <ProfilePic />
        <ProfileDet />
        <LangProg />
        <SkillsProg />
        <ExtraSkills />
      </div>
      <div className="ProfileDetails-main-slider-bottom">
        <CVButton />
      </div>
    </div>
  );
};

export default ProfileDetails;
