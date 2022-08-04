import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

function slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Not Found</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            A post related to{" "}
            <a
              href={`https://stackoverflow.com/search?q=${slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {slug}
            </a>{" "}
            was not found.
          </h1>
        </main>
      </div>
    </div>
  );
}

export default slug;
