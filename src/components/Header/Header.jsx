import styles from "./Header.module.css";
import HeaderIcon from "components/HeaderIcon";
import githubIcon from "assets/github.svg";
import linkedinIcon from "assets/linkedin.svg";

function Header() {
  return (
    <>
      <nav className={styles.header}>
        <HeaderIcon
          icon={githubIcon}
          url="https://github.com/doc-ar"
          className={styles.icon}
        >
          Github
        </HeaderIcon>
        <HeaderIcon
          icon={linkedinIcon}
          url="https://www.linkedin.com/in/aburrahmankhan/"
          className={styles.icon}
        >
          LinkedIn
        </HeaderIcon>
      </nav>
    </>
  );
}

export default Header;
