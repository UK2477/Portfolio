import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const SkillsProg = () => {
  const SkillsPro = [
    {
      label: "HTML 5",
      percentage: "90%",
    },
    {
      label: "CSS 3",
      percentage: "85%",
    },
    {
      label: "Js",
      percentage: "80%",
    },
    {
      label: "React js ( Design )",
      percentage: "75%",
    },
    {
      label: "WordPress",
      percentage: "85%",
    },
  ];
  return (
    <div className="progress-section">
      <div className="progress-main-section">
        <h5>Skills</h5>
        {SkillsPro.map((item) => {
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

export default SkillsProg;
