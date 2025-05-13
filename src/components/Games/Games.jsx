import styles from "./Games.module.css";
import GameButton from "components/GameButton";
import TicTacToe from "components/TicTacToe";
import tictactoeIcon from "assets/tictactoe.svg";
import two48Icon from "assets/2048.svg";
import resetIcon from "assets/reset.svg";
import { useState } from "react";

export default function Games(props) {
  const [resetKey, setResetKey] = useState(0);

  function resetOnClick() {
    setResetKey((prev) => prev + 1);
  }

  return (
    <>
      <div className={`${styles.container} ${props.className || ""}`}>
        <h1 className={styles.header}>Play a game</h1>
        <div className={styles.top_section}>
          <div className={styles.buttons_container}>
            <GameButton className={styles.game_button} icon={tictactoeIcon} />
            <GameButton className={styles.game_button} icon={two48Icon} />
          </div>
          <div className={styles.reset_section}>
            <div className={styles.reset_button} onClick={() => resetOnClick()}>
              <img src={resetIcon} className={styles.reset_icon} />
              <span className={styles.reset_text}>Reset</span>
            </div>
          </div>
        </div>
        <div className={styles.game_body}>
          <TicTacToe key={resetKey} className={styles.game} />
        </div>
      </div>
    </>
  );
}
