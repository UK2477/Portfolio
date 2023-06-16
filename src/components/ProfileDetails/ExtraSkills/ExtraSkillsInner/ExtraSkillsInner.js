import React from "react";
import { FaChartLine } from "react-icons/fa";

const ExtraSkillsInner = ({ SkillName }) => {
  return (
    <li className="d-flex align-content-center flex-wrap">
      <FaChartLine />
      <p>{SkillName}</p>
    </li>
  );
};

export default ExtraSkillsInner;
