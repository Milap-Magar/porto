// Import necessary libraries and assets
import React from "react";
import main_image from "../../assets/dog.jpg";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="main-section relative h-screen w-full">
        <figure className="absolute right-8 top-[475px] sm:top-[350px] sm:right-16 md:top-0 md:right-5">
          <img
            className="h-[55vh] w-[80vw] sm:w-[65vw] sm:h-[75vh] md:h-[80vh] md:w-[30vw]"
            src={main_image}
            alt="main_image"
          />
        </figure>
        <article className="main-heading w-[80vw] md:w-[60vw] absolute top-20 md:top-36 left-10 font-kod font-medium text-[5.5vh] md:text-[7.5vh]">
          <h1>
            Hiee! I am Milap Magar and I do{" "}
            <Button name="Frontend Development" />
          </h1>
        </article>
      </div>
    </>
  );
};

export default Main;
