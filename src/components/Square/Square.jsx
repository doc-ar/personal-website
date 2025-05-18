import { useState, useEffect, useRef } from "react";
import styles from "./Square.module.css";

export default function Square(props) {
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
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
        <img ref={imgRef} className={styles.image} src={props.icon} />
      </div>
    </>
  );
}
