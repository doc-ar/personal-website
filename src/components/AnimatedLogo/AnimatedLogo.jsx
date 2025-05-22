import { useEffect, useRef } from "react";
import styles from "./AnimatedLogo.module.css";

export default function AnimatedLogo(props) {
  let angle = 0;

  return (
    <>
      <div
        className={`${styles.circle_item} ${props.className || ""}`}
        style={{ animationDelay: `${props.delay}ms` }}
      >
        <img
          src={props.logo}
          className={styles.item_logo}
          style={{ animationDelay: `${props.delay + 500}ms` }}
          onClick={(e) => {
            angle += 360;
            e.currentTarget.style.transform = `rotate(${angle}deg)`;
          }}
        ></img>
      </div>
    </>
  );
}
