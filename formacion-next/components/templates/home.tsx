import React, { FC } from "react";
import { Card } from "../molecules/card";
import { Layout } from "./_layout";
import styles from "../../styles/Home.module.css";

export const HomeTemplate: FC = () => {
  return (
    <Layout>
      <div className={styles.grid}>
        <Card
          href="https://nextjs.org/docs"
          title="Documentation"
          content="Find in-depth information about Next.js features and API."
        />

        <Card
          href="https://nextjs.org/learn"
          title="Learn"
          content="Learn about Next.js in an interactive course with quizzes!"
        />

        <Card
          href="https://github.com/vercel/next.js/tree/master/examples"
          title="Examples"
          content="Discover and deploy boilerplate example Next.js projects."
        />

        <Card
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          title="Deploy"
          content="Instantly deploy your Next.js site to a public URL with Vercel."
        />
      </div>
    </Layout>
  );
};
