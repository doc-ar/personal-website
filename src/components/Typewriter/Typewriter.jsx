import styles from "./Typewriter.module.css";

export default function Typewriter(props) {
  const Tag = props.as || "span";
  const combinedClassName =
    `${styles.typewriter} ${props.className || ""}`.trim();

  return (
    <>
      <Tag className={combinedClassName}>{props.children}</Tag>
    </>
  );
}
