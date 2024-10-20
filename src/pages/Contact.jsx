import React from "react";
import { Line, Input, NewButton } from "../components/jsx";
import { motion } from "framer-motion";
import main from "../assets/ichiko.gif";

const Contact = () => {
  const handleSubmit = () => {
    // Your submit logic here
    console.log("Form submitted!");
  };

  return (
    <div id="contact">
      <div className="content-section bg-inherit w-full h-[650px]">
        <Line heading="Contact" />
        <div className="relative">
          <motion.span
            className="absolute w-auto top-16 flex justify-center items-center text-start px-6 font-kod"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Looking to start a new project or just want to say hi? Send me an
            email and I’ll do my best to reply within 24 hrs!
          </motion.span>
          <div className="absolute top-44 left-0 right-0 px-10 py-2 text-center mx-2">
            {/* White blur layer behind the form */}
            <div className="absolute inset-0 bg-white opacity-40 blur-lg rounded-lg"></div>

            {/* Form container */}
            <motion.div
              className="relative bg-cover bg-center h-full backdrop-blur-lg bg-opacity-20 border border-white/30 rounded-lg shadow-lg shadow-emerald-500/50 flex flex-col items-center justify-center text-black py-5 px-2"
              style={{ backgroundImage: `url(${main})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Input value="Name" className="text-black" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Input value="Email" className="text-black" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Input value="Address" className="text-black" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Input value="Message" className="text-black" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <NewButton value="Submit" onSubmit={handleSubmit} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
