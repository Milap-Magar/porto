import React from "react";
import { SiGoogledocs } from "react-icons/si";
import "../css/resume.css";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="button-icon"
      onClick={handleDownload}
      style={{ cursor: "pointer" }}
    >
      <div className="icon">
        <SiGoogledocs className="h-6 w-7" />
      </div>
      <div className="cube">
        <span className="side front">Here is my Resume</span>
        <span className="side top">Check out my Resume</span>
      </div>
    </div>
  );
};

export default Resume;
