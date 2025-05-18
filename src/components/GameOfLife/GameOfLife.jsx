import { useRef, useEffect, useState } from "react";

import styles from "./GameOfLife.module.css";
import { fillCell, nextGeneration, resetGrid } from "./utils/gameOfLifeUtils";
import playIcon from "assets/play.svg";
import pauseIcon from "assets/pause.svg";
import resetIcon from "assets/reset.svg";
import {
  handleCanvasClick,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
} from "./utils/canvasClickHandlers";

export default function GameOfLife(props) {
  const [isLooping, setIsLooping] = useState(false);
  const [aliveCells, setAliveCells] = useState(new Set());
  const [isDrawing, setIsDrawing] = useState(false);
  const aliveCellsRef = useRef(aliveCells);
  const intervalRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasStateRef = useRef(null);

  function handleClick(e) {
    handleCanvasClick(e, canvasRef, canvasStateRef, aliveCells, setAliveCells);
  }

  useEffect(() => {
    aliveCellsRef.current = aliveCells;
  }, [aliveCells]);

  useEffect(() => {
    if (isLooping) {
      intervalRef.current = setInterval(() => {
        nextGeneration(aliveCellsRef.current, setAliveCells);
      }, 200); // adjust interval as desired
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isLooping]);

  useEffect(() => {
    window.addEventListener("mouseup", () => handleMouseUp(setIsDrawing));
    window.addEventListener("touchend", () => handleTouchEnd(setIsDrawing));
    const canvas = canvasRef.current;
    const canvasState = {
      ctx: canvas.getContext("2d"),
      cols: 80,
      rows: 40,
      cellSize: 18,
    };
    if (window.innerWidth <= 600) {
      canvasState.cols = 30;
      canvasState.rows = 60;
      canvasState.cellSize = 18;
    }
    canvasStateRef.current = canvasState;

    // Set canvas size
    canvas.width = canvasState.cols * canvasState.cellSize;
    canvas.height = canvasState.rows * canvasState.cellSize;

    resetGrid(canvasState);

    aliveCells.forEach((key) => {
      const [col, row] = key.split(",");
      fillCell(canvasState, col, row);
    });
  }, [aliveCells]);

  return (
    <div className={`${styles.container} ${props.className || ""}`}>
      <h1 className={styles.header}>Conway's game of life simluation</h1>
      <div className={styles.button_grid}>
        <button className={styles.button} onClick={() => setIsLooping(true)}>
          <img src={playIcon} alt="Start" />
          Start
        </button>
        <button className={styles.button} onClick={() => setIsLooping(false)}>
          <img src={pauseIcon} alt="Pause" />
          Pause
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setIsLooping(false);
            setAliveCells(new Set());
          }}
        >
          <img src={resetIcon} alt="Reset" />
          Reset
        </button>
      </div>
      <div className={styles.canvas_container}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          onMouseDown={(e) => handleMouseDown(e, setIsDrawing, handleClick)}
          onMouseMove={(e) => handleMouseMove(e, isDrawing, handleClick)}
          onTouchStart={(e) => handleTouchStart(e, setIsDrawing, handleClick)}
          onTouchMove={(e) => handleTouchMove(e, isDrawing, handleClick)}
        ></canvas>
      </div>
    </div>
  );
}
