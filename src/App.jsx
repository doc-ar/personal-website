import useLenis from "hooks/useLenis.js";
import "./global_variables.css";
import "./App.css";

import Header from "components/Header";
import Intro from "components/Intro";
import TechStack from "components/TechStack";
import Games from "components/Games";
import GameOfLife from "components/GameOfLife";

function App() {
  useLenis();

  return (
    <>
      <div className="gradient-bg">
        <Header />
        <Intro />
        <TechStack className="tech_stack" />
        <Games className="games_section" />
        <GameOfLife className="simulation" />
        <span className="construction_banner">
          This Site Is Currently Under Construction
        </span>
      </div>
    </>
  );
}

export default App;
