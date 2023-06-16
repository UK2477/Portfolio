import React from "react";
import ProfileDetails from "./ProfileDetails";
import MainBox from "./MainBox";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <div className="main-pr-section">
        <div className="main-pr-inner-section">
          <div className="main-pr-inner-box d-flex flex-wrap">
            <div className="main-profile-section">
              <div className="main-profile-inner-section">
                <ProfileDetails />
                {/* <SmoothScroll /> */}
              </div>
            </div>
            <div className="main-box-section">
              <div className="main-box-inner-section">
                <MainBox />
              </div>
            </div>
            <div className="header-main-section">
              <div className="header-main-inner-section">
                <Header />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
