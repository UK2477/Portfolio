import React from "react";
import ExtraSkillsInner from "./ExtraSkillsInner/ExtraSkillsInner";

const ExtraSkills = () => {
  const ExtraSkillsInnerPro = [
    {
      SkillName: "Bootstrap, Materialize",
    },
    {
      SkillName: "Stylus, Sass, Less",
    },
    {
      SkillName: "React js, Vue Js ( Design )",
    },
  ];
  return (
    <div className="extra-skills-section">
      <div className="extra-skills-inner-section">
        <h5>Extra Skills</h5>
        <ul className="ct-list">
          {ExtraSkillsInnerPro.map((item) => {
            return <ExtraSkillsInner key={item.SkillName} {...item} />;
          })}
        </ul>
      </div>
      <hr className="ct-hr m-0" />
    </div>
  );
};

export default ExtraSkills;
