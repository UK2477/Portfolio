import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Button } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import HomeAnimation from "./HomeAnimation/HomeAnimation";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
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
        <section className="home-main-section h-100">
          <div className="home-main-inner-section h-100">
            <HomeAnimation />
            <div className="home-main-box text-center">
              <h1>
                I’m Rayan Adlrdard <span>Font - End</span> Developer
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                volutpat feugiat placerat lobortis.
              </p>
              <Button variant="light" className="ct-hire-me-button">
                <span>HIRE ME</span>
                <FiArrowRight />
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
