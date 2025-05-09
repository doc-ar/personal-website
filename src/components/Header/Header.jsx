import styles from "./Header.module.css";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import githubIcon from "/src/assets/github.svg";
import linkedinIcon from "/src/assets/linkedin.svg";

function Header() {
  return (
    <>
      <nav className={styles.header}>
        <HeaderIcon icon={githubIcon} url="https://github.com/doc-ar">
          Github
        </HeaderIcon>
        <HeaderIcon
          icon={linkedinIcon}
          url="https://www.linkedin.com/in/aburrahmankhan/"
        >
          LinkedIn
        </HeaderIcon>
      </nav>
    </>
  );
}

export default Header;
