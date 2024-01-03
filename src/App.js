import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Icons from "./components/Icons";

const App = () => {
  return (
    <div className="overflow-hidden bg-no-repeat bg-cover bg-site">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Icons />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
