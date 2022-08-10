import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

function blog() {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    console.log("useEffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setblog(parsed);
      });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>

        <p className={styles.description}>All my posts can be found here.</p>

        <div className={styles.grid}>
          {blog.map((blogitems) => {
            return (
              <div key={blogitems.slug}>
                <Link href={`/blogposts/${blogitems.slug}`}>
                  <a className={styles.card}>
                    <h2>{blogitems.title} &rarr;</h2>
                    <p>{blogitems.content.substr(0, 400)}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default blog;
