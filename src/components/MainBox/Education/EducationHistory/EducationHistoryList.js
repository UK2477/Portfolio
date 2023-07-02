import React from "react";

const EducationHistoryList = ({
  EducationPlace,
  EducationStudy = "Student",
  EducationDate,
  EducationTitle,
  EducationDes,
}) => {
  return (
    <li className="d-flex flex-wrap">
      <div className="EducationHistory-left">
        <h5>{EducationPlace}</h5>
        <div className="EducationHistory-left-lable d-flex align-items-center flex-wrap">
          <p>{EducationStudy}</p>
          <span>{EducationDate}</span>
        </div>
      </div>
      <div className="EducationHistory-right">
        <h5>{EducationTitle}</h5>
        <p>{EducationDes}</p>
      </div>
    </li>
  );
};

export default EducationHistoryList;
