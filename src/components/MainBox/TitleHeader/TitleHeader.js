import React from "react";

const TitleHeader = ({
  TitleHeaderTitle,
  TitleHeaderDes,
}) => {
  return (
    <div className="title-header-section">
      <div className="title-header-inner text-center">
        <h1>{TitleHeaderTitle}</h1>
        <p>{TitleHeaderDes}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
