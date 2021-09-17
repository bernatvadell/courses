import { FC } from "react";
import styles from "../../styles/Home.module.css";

export const PageSubtitle: FC = () => {
  return (
    <p className={styles.description}>
      Get started by editing <code className={styles.code}>pages/index.js</code>
    </p>
  );
};
