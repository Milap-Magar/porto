import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import HomePage from "./Homepage";
import Loading from "../components/jsx/Loading/Loading";

const Main = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <>{mobileView ? <Landing /> : <HomePage />}</>;
};

export default Main;
