import { FC } from "react";
import styles from "../../styles/Home.module.css";

export const PageTitle: FC = () => {
  return (
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  );
};
