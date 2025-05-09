import styles from "./AnimatedLogo.module.css";

export default function AnimatedLogo(props) {
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
        ></img>
      </div>
    </>
  );
}
