import React from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

const CVButton = () => {
  return (
    <div className="cv-button">
      <Button variant="light" className="ct-cv-button">
        <span>Download cv</span>
        <FaDownload />
      </Button>
    </div>
  );
};

export default CVButton;
