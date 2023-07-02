import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import TitleHeader from "../TitleHeader/TitleHeader";
import EducationHistory from "./EducationHistory/EducationHistory";

const Education = () => {
  useEffect(() => {
    document.title = "Education";
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="education-main-section">
          <div className="education-main-inner">
            <TitleHeader
              TitleHeaderTitle="Education"
              TitleHeaderDes="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
            />
            <EducationHistory />
          </div>
        </section>
      )}
    </>
  );
};

export default Education;
