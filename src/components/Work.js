import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0"
          >
            <div>
              <h2 className="leading-tight h2 text-accent">
                My latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Seasoned software engineer with a diverse project portfolio,
                showcasing proficiency across various technologies and domains.
                I bring a track record of delivering successful solutions,
                emphasizing both functionality and user experience. Eager for
                new challenges and committed to producing high-quality,
                innovative work.
              </p>
              {/* <button className="btn btn-sm">View all projects</button> */}
            </div>
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img1}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-10"
          >
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img2}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img3}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
