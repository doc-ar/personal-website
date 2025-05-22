import useLenis from "hooks/useLenis.js";
import "./global_variables.css";
import "./App.css";

import Header from "components/Header";
import Intro from "components/Intro";
import TechStack from "components/TechStack";
import Games from "components/Games";
import GameOfLife from "components/GameOfLife";
import useObserver from "hooks/useObserver";
import useKeyObserver from "hooks/useKeyObserver";
import { useState } from "react";

function App() {
  const [key, setKey] = useState(0);
  useLenis();
  useKeyObserver(".key", setKey);
  useObserver(".hidden", "reveal");

  return (
    <>
      <div className="gradient-bg">
        <Header className="header" />
        <Intro className="intro_section" />
        <TechStack key={key} className="tech_stack hidden key" />
        <Games className="games_section hidden" />
        <GameOfLife className="simulation hidden" />
        <span className="construction_banner">
          This Site Is Currently Under Construction
        </span>
      </div>
    </>
  );
}

export default App;
