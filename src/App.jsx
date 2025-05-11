import { useEffect, useState } from "react";

import useLenis from "/src/hooks/useLenis.js";
import "/src/global_variables.css";
import "/src/App.css";
import Header from "/src/components/Header/Header";
import Intro from "/src/components/Intro/Intro";
import TechStack from "/src/components/TechStack/List";
import TicTacToe from "/src/components/TicTacToe/Tictactoe";

function App() {
  useLenis();

  return (
    <>
      <div id="gradient-bg">
        <Header />
        <Intro />
        <TechStack />
        <TicTacToe className="tictactoe" />
      </div>
    </>
  );
}

export default App;
