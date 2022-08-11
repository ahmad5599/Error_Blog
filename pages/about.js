import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";
import { saveAs } from "file-saver";

function about() {
  const saveFile = () => {
    saveAs("/Resume.pdf", "example.pdf");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          quibusdam eligendi, molestias maiores corrupti, voluptas tempore
          repellat error sunt inventore dolore! Quam labore deleniti quia dolor?
          Ut rerum assumenda ratione suscipit laborum.
        </p>
        <h2>Skilles provided</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          deleniti tempore labore, consequatur voluptas, voluptate, quis magni
          ut esse amet sint error?
        </p>
        <p>we can builed your projects in the following fields:</p>
        <ul>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
        </ul>
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magni
          maiores?
        </p>

        <button className={styles.cvButton} onClick={saveFile}>
          Resume
        </button>
      </main>
    </div>
  );
}

export default about;
