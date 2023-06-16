import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';

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
  return <>{loading ? <Loader /> : <>History</>}</>;
}

export default History