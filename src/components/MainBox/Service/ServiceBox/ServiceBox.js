import React from "react";
import { Row } from "react-bootstrap";
import ServiceBoxCard from "./ServiceBoxCard";

const ServiceBox = () => {
  const ServiceBoxCardIn = [
    {
      ServiceBoxCardImg: "./assets/images/ServiceBoxCard-img-1.png",
      ServiceBoxCardTitle: "HTML 5",
      ServiceBoxCardDes: "Create HTML Template",
    },
    {
      ServiceBoxCardImg: "./assets/images/ServiceBoxCard-img-2.png",
      ServiceBoxCardTitle: "CSS 3",
      ServiceBoxCardDes: "Create CSS Template",
    },
    {
      ServiceBoxCardImg: "./assets/images/ServiceBoxCard-img-3.png",
      ServiceBoxCardTitle: "Bootstrap",
      ServiceBoxCardDes: "Create Bootstrap Template",
    },
    {
      ServiceBoxCardImg: "./assets/images/ServiceBoxCard-img-4.png",
      ServiceBoxCardTitle: "React Js ( Designing )",
      ServiceBoxCardDes: "React Js Projects",
    },
    {
      ServiceBoxCardImg: "./assets/images/ServiceBoxCard-img-5.png",
      ServiceBoxCardTitle: "Next Js ( Designing )",
      ServiceBoxCardDes: "Next Js Projects",
    },
  ];
  return (
    <div className="service-box-main">
      <div className="service-box-inner">
        <Row className="justify-content-center">
          {ServiceBoxCardIn.map((item) => {
            return <ServiceBoxCard key={item.ServiceBoxCardTitle} {...item} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default ServiceBox;
