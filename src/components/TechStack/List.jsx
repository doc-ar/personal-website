import styles from "./List.module.css";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo.jsx";
import nodejsLogo from "/src/assets/nodejs.svg";
import reactLogo from "/src/assets/react.svg";
import goLogo from "/src/assets/go.svg";
import dockerLogo from "/src/assets/docker.svg";
import nginxLogo from "/src/assets/nginx.svg";
import githubLogo from "/src/assets/github.svg";
import postgresqlLogo from "/src/assets/postgresql.svg";
import gitLogo from "/src/assets/git.svg";

export default function ItemList() {
  const initial_delay = 0;
  const delay = 200;

  const logos = [
    nodejsLogo,
    reactLogo,
    goLogo,
    nginxLogo,
    gitLogo,
    githubLogo,
    dockerLogo,
    postgresqlLogo,
  ];

  return (
    <>
      <div className={styles.list_container}>
        <h1>Technologies</h1>
        <div className={styles.items_list}>
          {logos.map((logo, index) => (
            <AnimatedLogo
              className={styles.logo_icon}
              logo={logo}
              delay={initial_delay + delay * index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
