import styles from "./GameButton.module.css";

export default function GameButton(props) {
  return (
    <>
      <div className={`${styles.container} ${props.className || ""}`}>
        <img className={styles.icon} src={props.icon} />
      </div>
    </>
  );
}
