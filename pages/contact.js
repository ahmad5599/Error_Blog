import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navbar from "./navbar";

function ContactMe() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Contact</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>
      </main>
    </div>
  );
}

export default ContactMe;
