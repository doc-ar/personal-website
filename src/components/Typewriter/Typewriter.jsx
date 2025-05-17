import styles from "./Typewriter.module.css";

export default function Typewriter(props) {
  const Tag = props.as || "span";

  return (
    <>
      <Tag className={`${styles.typewriter} ${props.className || ""}`}>
        {props.children}
      </Tag>
    </>
  );
}
