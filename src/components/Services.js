import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Front-End Development",
    description:
      "I specialize in building dynamic and responsive web applications, blending the power of ReactJS with the elegance of Tailwind CSS and Material UI for a sleek and user-friendly interface.",
  },
  {
    name: "Back-End Development",
    description:
      "As a backend developer, I harness the robust capabilities of Node.js and Express.js to create scalable and efficient server-side solutions, ensuring optimal performance and responsiveness.",
  },
  {
    name: "UI/UX Design ",
    description:
      "I use Figma to create visually appealing and user-friendly interfaces, ensuring a smooth user experience from idea to reality.",
  },
  {
    name: "Database Development",
    description:
      "Proficient in both SQL and NoSQL databases, I design and implement robust database architectures, utilizing the precision of SQL (MySQL) for structured data and the flexibility of MongoDB for dynamic and scalable document-based storage.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 bg-no-repeat lg:bg-bottom mix-blend-lighten lg:mb-0"
          >
            <h2 className="mb-6 h2 text-accent">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a fullstack developer passionate about making user-friendly
              digital solutions. With skills in both front and back-end, I enjoy
              tackling projects that create a positive impact. Excited to bring
              my expertise to new opportunities and make technology accessible
              for everyone.
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20  mb-[38px] flex"
                    key={index}
                  >
                    <div className="">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="leading-tight font-secondary">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
