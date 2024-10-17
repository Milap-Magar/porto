// Import necessary libraries and assets
import React from "react";
import main_image from "../../../assets/dog.jpg";
import image from "../../../../public/logo1.svg";
import "../../css/components.css";

const Main = () => {
  return (
    <>
      <div className="navbar-section relative w-full h-10 p-16 flex items-center justify-center ">
        <figure className="logo">
          <a href="/">
            <img
              src={image}
              alt="Logo image"
              className="h-24 w-24 transition-transform duration-300 hover:scale-105"
            />
          </a>
        </figure>
      </div>
      <div className="main-section relative h-[40vh] w-full">
        <figure className="absolute right-9 top-36">
          <img
            className="h-[350px] w-[80vw]"
            src={main_image}
            alt="main_image"
          />
        </figure>
        <article className="main-heading w-[95vw] absolute top-0 left-5 px-5">
          <h1 className="font-cross text-[32px]">
            Hiee, I’m Milap Magar, a frontend developer
          </h1>
        </article>
      </div>
    </>
  );
};

export default Main;
