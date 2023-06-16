import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const LangProg = () => {
  const ProgressBarI = [
    {
      label: "Gujarati",
      percentage: "100%",
    },
    {
      label: "Hindi",
      percentage: "80%",
    },
    {
      label: "English",
      percentage: "80%",
    },
  ];
  return (
    <div className="progress-section">
      <div className="progress-main-section">
        <h5>Languages</h5>
        {ProgressBarI.map((item) => {
          return (
            <ProgressBar
              key={item.label}
              {...item}
              visualParts={[
                {
                  ...item,
                },
              ]}
            />
          );
        })}
      </div>
      <hr className="ct-hr m-0" />
    </div>
  );
};

export default LangProg;
