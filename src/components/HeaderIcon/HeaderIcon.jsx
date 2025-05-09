import styles from "./HeaderIcon.module.css";

export default function HeaderIcon(props) {
  const combinedClassName =
    `${styles.typewriter} ${props.className || ""}`.trim();

  return (
    <>
      <a className={styles.icon} href={props.url}>
        <img src={props.icon} />
        <span>{props.children}</span>
      </a>
    </>
  );
}
