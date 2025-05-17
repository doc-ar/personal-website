import styles from "./HeaderIcon.module.css";

export default function HeaderIcon(props) {
  return (
    <>
      <a className={styles.icon} href={props.url}>
        <img src={props.icon} className={props.className} />
        <span>{props.children}</span>
      </a>
    </>
  );
}
