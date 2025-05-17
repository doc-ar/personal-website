import React, { useState } from "react";
import renderBoard from "./utils/renderBoard";
import checkWin from "./utils/checkWin";
import getWinLineStyle from "./utils/getWinLineStyles";
import styles from "./Tictactoe.module.css";

export default function TicTacToe(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winLineStyle, setWinLineStyle] = useState();

  function handleClick(index) {
    if (squares[index] || winLineStyle) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    // If the player wins the winning indexes are returned. i.e. [1, 4, 7], [0, 1, 2]
    // If there was no win, nothing is returned
    const win_condition = checkWin(newSquares);
    if (win_condition) {
      const winStyles = getWinLineStyle(win_condition);
      setWinLineStyle(winStyles);
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  return (
    <div className={`${styles.grid} ${props.className || ""}`}>
      <div className={styles.winline} style={winLineStyle}></div>
      {renderBoard(squares, handleClick, styles)}
    </div>
  );
}
