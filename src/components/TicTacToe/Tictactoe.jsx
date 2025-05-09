import Square from "../Square/Square";
import styles from "./Tictactoe.module.css";
import githubIcon from "/src/assets/github.svg";

export default function TicTacToe() {
  return (
    <>
      <div className={styles.grid}>
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
        <Square className={styles.cell} icon={githubIcon} />
      </div>
    </>
  );
}
