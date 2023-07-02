import React from "react";
import EducationHistoryList from "./EducationHistoryList";

const EducationHistory = () => {
  const EducationHistoryListM = [
    {
      EducationPlace: "University of Toronto",
      EducationDate: "Jan 1016 - Dec 2021",
      EducationTitle: "Certificate of web training",
      EducationDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      EducationPlace: "Programming Course",
      EducationDate: "Jan 1016 - Dec 2021",
      EducationTitle: "Certificate of web training",
      EducationDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      EducationPlace: "Web developer courses",
      EducationDate: "Jan 1016 - Dec 2021",
      EducationTitle: "Certificate of web training",
      EducationDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
  ];
  return (
    <div className="EducationHistory-main-section">
      <div className="EducationHistory-main-inner">
        <ul className="ct-list">
          {EducationHistoryListM.map((item) => {
            return <EducationHistoryList key={item.EducationPlace} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default EducationHistory;
