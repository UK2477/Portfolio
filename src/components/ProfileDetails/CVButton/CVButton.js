import React from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import pdfFile from "../../../assets/Resume/Resume.pdf";

const CVButton = () => {
  return (
    <div className="cv-button">
      <Button variant="light" className="ct-cv-button" onClick={() => window.open(pdfFile)}>
        <span>Download cv</span>
        <FaDownload />
      </Button>
    </div>
  );
};

export default CVButton;
