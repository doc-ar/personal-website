import styles from "./Header.module.css";
import HeaderIcon from "components/HeaderIcon";
import githubIcon from "assets/github.svg";
import linkedinIcon from "assets/linkedin.svg";
import blackNyellow from "assets/black_yellow.svg";
import gradient from "assets/gradient.svg";
import changeTheme from "./utils/changeTheme";

function Header(props) {
  return (
    <>
      <nav className={`${styles.header} ${props.className || ""}`}>
        <div className={styles.icons}>
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
        </div>
        <div className={styles.themes}>
          <img
            src={blackNyellow}
            className={styles.theme_icon}
            onClick={() => {
              changeTheme("black_yellow_theme");
            }}
          ></img>
          <img
            src={gradient}
            className={styles.theme_icon}
            onClick={() => {
              changeTheme("gradient_theme");
            }}
          ></img>
        </div>
      </nav>
    </>
  );
}

export default Header;
