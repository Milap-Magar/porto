import React from "react";
import "../components/css/components.css";
import img1 from "../assets/ss.png";
import img2 from "../assets/ss1.png";
import { Line, Card } from "../components/jsx";

const Works = () => {
  return (
    <>
      <div id="works">
        <div className="work-section w-full h-[1300px] md:h-screen relative">
          <Line heading="Projects" />
          <div className="works-container gap-12 m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly md:pt-28 pt-96">
            <Card
              heading="Shoes Show-Case Website:"
              desc="The React and Tailwind CSS-powered shoe web app presents a curated collection of footwear. Its intuitive homepage showcases featured shoes with images, names, and brief descriptions."
              image={img1}
            />
            <Card
              heading="Travel & Tour Website:"
              desc="Embark on a seamless travel experience with Wanderlust, a cutting-edge travel app meticulously crafted with the dynamic duo of Tailwind CSS and React. Made with the help of teacher."
              image={img2}
            />
            <Card
              heading="Travel & Tour Website:"
              desc="Embark on a seamless travel experience with Wanderlust, a cutting-edge travel app meticulously crafted with the dynamic duo of Tailwind CSS and React. Made with the help of teacher."
              image={img2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
