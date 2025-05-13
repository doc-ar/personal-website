import styles from "./GameButton.module.css";

export default function GameButton(props) {
  return (
    <>
      <div className={`${styles.container} ${props.className || ""}`}>
        <img className={styles.name} src={props.icon} />
      </div>
    </>
  );
}
