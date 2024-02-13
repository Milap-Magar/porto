import React from "react";
import { Homepage, Works, About, Contact } from "./pages/index";
import { Footer } from "./components/jsx";

const App = () => {
  return (
    <>
      <Homepage />
      <Works />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
