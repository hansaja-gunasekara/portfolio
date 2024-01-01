import React from "react";
import Logo from "../assets/logo.svg";
import { FaCircleArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={Logo} className="h-12" alt="" />
          </a>

          <button className="flex flex-row items-center justify-center btn btn-sm">
            <p className="mr-2">Hire me</p>
            <FaCircleArrowRight size={21} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
