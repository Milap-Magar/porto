import React from "react";
import { Line, Input, NewButton } from "../components/jsx";

const Contact = () => {
  const handleSubmit = () => {
    // Your submit logic here
    console.log("Form submitted!");
  };
  return (
    <>
      <div id="contact">
        <div className="content-section bg-inherit w-full md:h-[500px] h-[900px]">
          <Line heading="Contact" />
          <div className="relative">
            <div className="absolute top-[500px] left-[25%] md:top-28 md:left-[50%] ">
              <Input value="Name" />
              <Input value="Email" />
              <Input value="Address" />
              <Input value="Message" />
              <NewButton value="Submit" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
