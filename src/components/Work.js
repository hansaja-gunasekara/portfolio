import React, { useEffect, useState } from "react";
import { motion, useElementScroll } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import PopupDialog from "./PopupDialog";
import { isEditable } from "@testing-library/user-event/dist/utils";

const Work = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [title, setIsTitle] = useState("");
  const [description, setIsDescription] = useState("");
  const [githublink, setIsGithublink] = useState("");

  const handleOpen = (title, description, githublink) => {
    setIsSelected(true);
    setIsTitle(title);
    setIsDescription(description);
    setIsGithublink(githublink);
  };

  const works = [
    {
      title: " Green Leaf Information Management System",
      description: "",
      githublink:
        "https://github.com/hansaja-gunasekara/MERN-Green-Leaf-Information-Management-System",
    },
    {
      title: "My Portfolio",
      description: "",
      githublink: "https://github.com/hansaja-gunasekara/portfolio",
    },
    {
      title: "Real time Weather App",
      description: "",
      githublink: "https://github.com/hansaja-gunasekara/React-JS-Weather-App",
    },
  ];

  return (
    <section className="relative section" id="work">
      <PopupDialog
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        title={title}
        description={description}
        githublink={githublink}
      />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="leading-tight h2 text-accent">
                My latest <br />
                Work.
              </h2>
              <p className="mb-16">
                Seasoned software engineer with a diverse project portfolio,
                showcasing proficiency across various technologies and domains.
                I bring a track record of delivering successful solutions,
                emphasizing both functionality and user experience. Eager for
                new challenges and committed to producing high-quality,
                innovative work.
              </p>
              {/* <button className="btn btn-sm">View all projects</button> */}
            </div>
            <div
              className="relative overflow-hidden border-2 group border-white/50 rounded-xl"
              onClick={() =>
                handleOpen(
                  works[0].title,
                  works[0].description,
                  works[0].githublink
                )
              }
            >
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img1}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">Full-Stack</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-xl text-white">
                  Green Leaf Information Management System
                </span>
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
            <div
              className="relative overflow-hidden border-2 group border-white/50 rounded-xl"
              onClick={() =>
                handleOpen(
                  works[1].title,
                  works[1].description,
                  works[1].githublink
                )
              }
            >
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img2}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">Frontend</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-xl text-white">My Portfolio</span>
              </div>
            </div>
            <div
              className="relative overflow-hidden border-2 group border-white/50 rounded-xl"
              onClick={() =>
                handleOpen(
                  works[2].title,
                  works[2].description,
                  works[2].githublink
                )
              }
            >
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>

              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img3}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">Frontend</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">
                  Real time Weather App
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
