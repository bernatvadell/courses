import { FC } from "react";
import styles from "../../styles/Home.module.css";

export type CardProps = {
  href: string;
  title: string;
  content: string;
};

export const Card: FC<CardProps> = ({ href, content, title }) => {
  return (
    <a href={href} className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{content}</p>
    </a>
  );
};
