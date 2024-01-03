import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hlovtah",
        "template_eg1kqp6",
        form.current,
        "8eySoJOk_gzdg8iez"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="pb-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-start flex-1"
          >
            <div>
              <h4 className="mb-2 text-xl font-medium tracking-wide uppercase text-accent">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-start flex-1 p-6 pb-10 border rounded-2xl gap-y-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your name"
              name="your_name"
            />
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your email"
              name="your_email"
            />
            <textarea
              className="w-full py-12 mb-4 transition-all bg-transparent border-b outline-none resize-none placeholder:text-white focus:border-accent"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
