import React from "react";
import Image from "../assets/avatar2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Hansaja <span>Gunasekara</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] mt-4"
            >
              {/* <span className="mr-4 text-white">I am a</span> <br /> */}
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Freelancer",
                  2000,
                  "Data Enthusiastic",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-lg mx-auto mb-8 text-[25px] lg:mx-0 font-bold"
            >
              Aspiring Tech Innovator | IT Undergraduate | Enthusiastic about
              Technology and Coding | Actively Seeking Collaborative Projects
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0"
            >
              <button className="btn btn-lg">Download CV</button>
              {/* <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a> */}
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0  "
            >
              <a
                href="https://linkedin.com/in/hansaja-gunasekara"
                target="_blank"
              >
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/hansaja-gunasekara" target="_blank">
                <FaGithub size={28} />
              </a>
              <a href="mailto:hgmgunasekara@gmail.com">
                <MdEmail size={28} />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
