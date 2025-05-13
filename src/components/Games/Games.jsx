import styles from "./Games.module.css";
import GameButton from "/src/components/GameButton/GameButton";
import TicTacToe from "/src/components/TicTacToe/Tictactoe";
import tictactoeIcon from "/src/assets/tictactoe.svg";
import two48Icon from "/src/assets/2048.svg";

export default function Games(props) {
  return (
    <>
      <div className={`${styles.container} ${props.className || ""}`}>
        <h1 className={styles.header}>Play Some Games</h1>
        <div className={styles.top_section}>
          <div className={styles.buttons_container}>
            <GameButton className={styles.game_button} icon={tictactoeIcon} />
            <GameButton className={styles.game_button} icon={two48Icon} />
          </div>
          <div className={styles.reset_section}></div>
        </div>
        <div className={styles.game_body}>
          <TicTacToe className={styles.game} />
        </div>
      </div>
    </>
  );
}
