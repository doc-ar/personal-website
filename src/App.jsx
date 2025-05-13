import { useEffect, useState } from "react";

import useLenis from "/src/hooks/useLenis.js";
import "/src/global_variables.css";
import "/src/App.css";
import Header from "/src/components/Header/Header";
import Intro from "/src/components/Intro/Intro";
import TechStack from "/src/components/TechStack/List";
import Games from "/src/components/Games/Games";

function App() {
  useLenis();

  return (
    <>
      <div id="gradient-bg">
        <Header />
        <Intro />
        <TechStack />
        <Games className="games_section" />
      </div>
    </>
  );
}

export default App;
