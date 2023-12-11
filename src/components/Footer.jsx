import React from "react";
import { FaLinkedin, FaFacebook, FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import image from "../assets/Logo.svg";
import "../components/components.css";

const Footer = () => {
  return (
    <>
      <div className="footer-section w-full h-[120px] relative">
        <figure className="logo-section">
          <img src={ image } alt="Logo/Image" className="h-14 w-14 absolute top-4 left-5" />
          <h6 id="footer-heading">©2023 Milap, All rights reserved.</h6>
        </figure>
        <div className="social-handles flex items-center absolute top-7 right-2 gap-3 cursor-pointer">
          <FaLinkedin className="h-6 w-6" />
          <FaFacebook className="h-6 w-6" />
          <BiLogoGmail className="h-6 w-6" />
          <FaGithubSquare className="h-6 w-6" />
        </div>
      </div>
    </>
  );
};

export default Footer;
