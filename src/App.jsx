import React from "react";
import Navbar from "./assets/components/navBar/navbar.jsx";
import Hero from "./assets/components/hero/hero.jsx";
import Programs from "./assets/components/programs/programs.jsx";
import Title from "./assets/components/title/title.jsx";
import Abt from "./assets/components/about/abt.jsx";
import Campus from "./assets/components/campus/campus.jsx";
import Testimonials from "./assets/components/testimonials/testimonials.jsx";
import Contactus from "./assets/components/contactus/contactus.jsx";
import { Web3Provider } from "./assets/components/connectKit/connect-kit.jsx";
import { ConnectKitButton } from "connectkit";
import { ConnectButton } from "./assets/components/hero/connect-button/connect-button.jsx";
import { useState } from "react";

// import { Web3ReactProvider } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";

const App = () => {
  const [isConnected, setIsconnected] = useState(false);
  return (
    <Web3Provider>
      <div>
        <Navbar>
          <ConnectKitButton />
        </Navbar>
        <Hero
          ConnectButton={<ConnectButton>{setIsconnected}</ConnectButton>}
          isConnected={isConnected}
        />
        <Title />
        <Programs />
        <Abt />
        <Campus />
        <Testimonials />
        <Contactus />
      </div>
    </Web3Provider>
  );
};

export default App;
