import { useEffect, useState } from "react";

import useLenis from "./utils/useLenis.js";
import "./global_variables.css";
import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import TechStack from "./components/TechStack/List";
import TicTacToe from "./components/TicTacToe/Tictactoe.jsx";

function App() {
  useLenis();

  return (
    <>
      <div id="gradient-bg">
        <Header />
        <Intro />
        <TechStack />
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
