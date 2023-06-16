import React from "react";
import ProfilePic from "./ProfilePic/ProfilePic";
import ProfileDet from "./ProfileDet/ProfileDet";
import LangProg from "./LangProg/LangProg";
import SkillsProg from "./SkillsProg/SkillsProg";
import ExtraSkills from "./ExtraSkills/ExtraSkills";
import CVButton from "./CVButton/CVButton";

const ProfileDetails = () => {
  return (
    <>
      <ProfilePic />
      <ProfileDet />
      <LangProg />
      <SkillsProg />
      <ExtraSkills />
      <CVButton />
    </>
  );
};

export default ProfileDetails;
