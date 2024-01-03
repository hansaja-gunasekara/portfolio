import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import icons from "../utils/icons";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[700px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="mb-4 h3">I'm a 3rd year undergraduate at SLIIT.</h3>
            <p className="mb-6 text-[20px]">
              Versatile full-stack developer adept at creating end-to-end web
              solutions. With expertise in both front-end and back-end
              technologies, I am driven to build robust and scalable
              applications that seamlessly integrate user-centric design with
              powerful functionality.
            </p>
            <div className="flex mb-5 gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : 3}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : 5}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div> */}
            </div>
            <div className="hidden lg:grid lg:grid-cols-6 lg:gap-5 ">
              {icons.map((icon, index) => (
                <img className="w-20 h-20" src={icon} alt={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
