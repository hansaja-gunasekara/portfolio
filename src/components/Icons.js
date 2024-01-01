import React from "react";
import icons from "../utils/icons";
import { useInView } from "framer-motion";

const Icons = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="block h-screen lg:hidden">
          <div class="grid grid-cols-6 gap-8 ">
            {icons.map((icon, index) => (
              <img className="w-20 h-20" src={icon} alt={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icons;
