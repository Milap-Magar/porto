// Import necessary libraries and assets
import React from "react";
import main_image from "../../assets/dog.jpg";

const Main = () => {
  return (
    <>
      <div className="main-section relative h-[40vh] w-full">
        <figure className="absolute right-9 top-32">
          <img
            className="h-[55vh] w-[80vw]"
            src={main_image}
            alt="main_image"
          />
        </figure>
        <article className="main-heading w-[95vw] absolute top-5 left-5 px-5">
          <h1 className="font-cross text-[32px]">
            Hiee, I’m Milap Magar, a frontend developer
          </h1>
        </article>
      </div>
    </>
  );
};

export default Main;
