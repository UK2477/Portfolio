import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? <Loader /> : <>Portfolio</>}</>;
};

export default Portfolio;
