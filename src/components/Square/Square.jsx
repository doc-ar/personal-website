import styles from "./Square.module.css";

export default function Square(props) {
  return (
    <>
      <div className={`${styles.square} ${props.className || ""}`}>
        <img className={styles.image} src={props.icon} />
      </div>
    </>
  );
}
