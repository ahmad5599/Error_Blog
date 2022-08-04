import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar";

function about() {
  return (
    <div className={styles.container}>
      <Navbar />
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
