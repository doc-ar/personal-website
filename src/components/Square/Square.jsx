import { useState, useEffect } from "react";
import styles from "./Square.module.css";

export default function Square(props) {
  useEffect(() => {
    const image = document.getElementsByClassName(styles.image)[props.index];
    image.classList.add(styles.reveal);

    setTimeout(() => {
      image.classList.remove(styles.reveal);
    }, 800);
  }, [props.icon]);

  return (
    <>
      <div
        className={`${styles.square} ${props.className || ""}`}
        onClick={props.onClick}
      >
        <img className={styles.image} src={props.icon} />
      </div>
    </>
  );
}
