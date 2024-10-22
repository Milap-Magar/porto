import React, { useState, useRef } from "react";
import { Line, Input, NewButton } from "../components/jsx";
import { motion } from "framer-motion";
import emailJs from "@emailjs/browser";
import main from "../assets/ichiko.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(form);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.message.trim() !== ""
    ) {
      emailJs
        .send(
          "service_26wgv6e",
          "template_qlpjyeq",
          {
            from_name: form.name,
            from_email: form.email,
            to_name: "Milap Magar",
            to_email: "milapmagar12@gmail.com",
            message: form.message,
          },
          "mPz6jaqTBYtiYzygg"
        )
        .then(() => {
          setLoading(false);
          toast.success("Thank you for Emailing, Will get back to you soon!!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Something went wrong, please try again in a minute.");
        });
    } else {
      toast.warn("Please fill in all fields");
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <ToastContainer />
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
                <label className="text-black font-semibold">Name:</label>
                <Input
                  value={form.name}
                  name="name"
                  placeholder="Your Name"
                  className="text-black mt-2"
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="text-black font-semibold mt-4">Email:</label>
                <Input
                  value={form.email}
                  name="email"
                  placeholder="Your Email"
                  className="text-black mt-2"
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="text-black font-semibold mt-4">
                  Message:
                </label>
                <Input
                  value={form.message}
                  name="message"
                  placeholder="Your Message"
                  className="text-black mt-2"
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <NewButton
                  value={loading ? "Sending..." : "Submit"}
                  onClick={handleSubmit}
                  className="mt-4"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
