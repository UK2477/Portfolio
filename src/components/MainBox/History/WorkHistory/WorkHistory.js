import React from "react";
import EducationHistoryList from "../../Education/EducationHistory/EducationHistoryList";

const WorkHistory = () => {
  const WorkHistoryL = [
    {
      EducationPlace: "Lead Web Designer",
      EducationDate: "Jan 1016 - Dec 2021",
      EducationTitle: "Certificate of web training",
      EducationDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      EducationPlace: "Junior Web Designer",
      EducationDate: "Jan 1016 - Dec 2021",
      EducationTitle: "Certificate of web training",
      EducationDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      EducationPlace: "Senior Web Designer",
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
          {WorkHistoryL.map((item) => {
            return <EducationHistoryList key={item.EducationPlace} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkHistory;
