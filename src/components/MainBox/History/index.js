import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import TitleHeader from "../TitleHeader/TitleHeader";
import WorkHistory from "./WorkHistory/WorkHistory";

const History = () => {
  useEffect(() => {
    document.title = "History";
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
        <section className="work-main-section">
          <div className="work-main-inner">
            <TitleHeader
              TitleHeaderTitle="Work History"
              TitleHeaderDes="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
            />
            <WorkHistory />
          </div>
        </section>
      )}
    </>
  );
};

export default History;
