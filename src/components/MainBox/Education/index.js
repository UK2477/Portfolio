import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

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
  return <>{loading ? <Loader /> : <>Education</>}</>;
};

export default Education;
