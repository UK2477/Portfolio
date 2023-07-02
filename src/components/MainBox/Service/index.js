import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import TitleHeader from "../TitleHeader/TitleHeader";
import ServiceBox from "./ServiceBox/ServiceBox";

const Service = () => {
  useEffect(() => {
    document.title = "Service";
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
      <section className="service-main-section">
        <div className="service-main-inner">
          <TitleHeader TitleHeaderTitle="my services" TitleHeaderDes="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum"/>
          <ServiceBox />
        </div>
      </section>
      )}
    </>
  );
};

export default Service;
