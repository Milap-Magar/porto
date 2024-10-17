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
        <div className="content-section bg-inherit w-full h-[650px]">
          <Line heading="Contact" />

          <div className="relative">
            <span className="absolute w-auto top-16 flex justify-center items-center text-start px-6">
              Looking to start a new project or just want to say hi? Send me an
              email and I’ll do my best to reply within 24 hrs!
            </span>
            <form
              className="absolute top-44 left-0 right-0 px-10 py-2 text-center mx-2 bg-opacity-20 border border-white/30
                backdrop-blur-lg rounded-lg shadow-lg shadow-emerald-500/50"
            >
              <Input value="Name" />
              <Input value="Email" />
              <Input value="Address" />
              <Input value="Message" />
              <NewButton value="Submit" onSubmit={handleSubmit} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
