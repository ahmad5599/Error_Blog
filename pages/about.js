import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
      </main>
    </div>
  );
}

export default about;
