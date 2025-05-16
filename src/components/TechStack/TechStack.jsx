import styles from "./TechStack.module.css";
import AnimatedLogo from "components/AnimatedLogo";

import nodejsLogo from "assets/nodejs.svg";
import reactLogo from "assets/react.svg";
import goLogo from "assets/go.svg";
import dockerLogo from "assets/docker.svg";
import nginxLogo from "assets/nginx.svg";
import githubLogo from "assets/github.svg";
import postgresqlLogo from "assets/postgresql.svg";
import gitLogo from "assets/git.svg";

export default function TechStack(props) {
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
      <div className={`${styles.list_container} ${props.className || ""}`}>
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
