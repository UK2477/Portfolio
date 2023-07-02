import React from "react";
import { Card, Col } from "react-bootstrap";

const ServiceBoxCard = ({
  ServiceBoxCardImg,
  ServiceBoxCardTitle,
  ServiceBoxCardDes,
}) => {
  return (
    <Col lg={4} className="my-3">
      <Card className="text-center">
        <Card.Img src={ServiceBoxCardImg} />
        <Card.Body>
          <Card.Title>{ServiceBoxCardTitle}</Card.Title>
          <Card.Text>{ServiceBoxCardDes}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceBoxCard;
