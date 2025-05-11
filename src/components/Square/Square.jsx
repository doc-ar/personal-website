import { useState, useEffect } from "react";
import styles from "./Square.module.css";

export default function Square(props) {
  const [imgKey, setImgKey] = useState(0);

  useEffect(() => {
    setImgKey((prev) => prev + 1); // runs only when src (props.icon) changes
  }, [props.icon]);

  return (
    <>
      <div
        className={`${styles.square} ${props.className || ""}`}
        onClick={props.onClick}
      >
        <img key={imgKey} className={styles.image} src={props.icon} />
      </div>
    </>
  );
}
