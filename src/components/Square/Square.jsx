import { useState, useEffect } from "react";
import styles from "./Square.module.css";

export default function Square(props) {
  const [imgKey, setImgKey] = useState(0);

  useEffect(() => {
    setImgKey((prev) => prev + 1);
    document
      .getElementsByClassName(styles.image)[0]
      .classList.remove(`${styles.reveal}`);
  }, [props.icon]);

  return (
    <>
      <div
        className={`${styles.square} ${props.className || ""}`}
        onClick={props.onClick}
      >
        <img
          key={imgKey}
          className={`${styles.image} ${styles.reveal} || ""`}
          src={props.icon}
        />
      </div>
    </>
  );
}
