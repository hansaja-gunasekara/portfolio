import React from "react";
import icons from "../utils/icons";
import { useInView } from "framer-motion";

const Icons = () => {
  return (
    <section className="block section lg:hidden" id="about">
      <div className="container mx-auto">
        <div className="block lg:hidden">
          <div class="grid sm:grid-cols-6 sm:gap-8 grid-cols-3 gap-4">
            {icons.map((icon, index) => (
              <img
                className="w-16 h-16 sm:w-20 sm:h-20"
                src={icon}
                alt={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icons;
