import React from "react";
import { Line, Input } from "../components/jsx";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="content-section bg-inherit w-full md:h-[500px] h-[800px]">
          <Line heading="Contact" />
          <div className="relative">
            <div className="absolute top-[500px] left-[25%] md:top-28 md:left-[50%] ">
              <Input value="Name"  />
              <Input value="Email"  />
              <Input value="Address"  />
              <Input value="Message"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
