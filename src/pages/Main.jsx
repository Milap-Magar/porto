import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import HomePage from "./Homepage";

const Main = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{mobileView ? <Landing /> : <HomePage />}</>;
};

export default Main;
