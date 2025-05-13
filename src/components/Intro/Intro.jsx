import styles from "./Intro.module.css";
import Typewriter from "components/Typewriter";

export default function Intro() {
  return (
    <>
      <div className={styles.intro_container}>
        <h1 className={styles.author_name}>AbdurRahman Khan</h1>
        <Typewriter as="h2" className={styles.tagline}>
          Welcome to my website
        </Typewriter>
      </div>
    </>
  );
}
