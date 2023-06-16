import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

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
  return <>{loading ? <Loader /> : <>Service</>}</>;
};

export default Service;
