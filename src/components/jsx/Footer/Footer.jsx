import React from "react";
import { FaLinkedin, FaFacebook, FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import image from "../../../../public/logo1.svg";
import "../../css/components.css";

const Footer = () => {
  // const emailLink = "mailto:milapmagar12@gmail.com";

  return (
    <>
      <div className="footer-section w-full h-[120px] relative bg-slate-300">
        <figure className="logo-section">
          <img
            src={image}
            alt="Logo/Image"
            className="h-28 w-28 absolute -top-2 left-0"
          />
          <h6 id="footer-heading">©2023 Milap, All rights reserved.</h6>
        </figure>
        <div className="social-handles flex items-center absolute top-7 right-2 gap-3 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/milap-magar-21427a229/"
            target="_blank"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/Milap.Magar2022" target="_blank">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <BiLogoGmail className="h-6 w-6" />
          </a>
          <a href="https://github.com/Milap-Magar" target="_blank">
            <FaGithubSquare className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
