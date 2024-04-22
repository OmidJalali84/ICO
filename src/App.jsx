import React from "react";
import Navbar from "./assets/components/navBar/navbar.jsx";
import Hero from "./assets/components/hero/hero.jsx";
import Programs from "./assets/components/programs/programs.jsx";
import Title from "./assets/components/title/title.jsx";
import Abt from "./assets/components/about/abt.jsx";
import Campus from "./assets/components/campus/campus.jsx";
import Testimonials from "./assets/components/testimonials/testimonials.jsx";
import Contactus from "./assets/components/contactus/contactus.jsx";

// import { Web3ReactProvider } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Contactus />
      </div>
    </div>
  );
};

export default App;
