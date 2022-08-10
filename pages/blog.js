import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import * as fs from "fs";

function Blog(props) {
  const [blog, setblog] = useState(props.allBlogs);

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
                    <p>{blogitems.metadesc.substr(0, 400)}</p>
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
//^^^^^^^^^^^^^^^^^for server side rendering^^^^^^^^^^^^^
// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await data.json();

//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   };
// }
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//^^^^^^^^^^^^^^^^^for static side rendering^^^^^^^^^^^^^
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let myFiles;
  let allBlogs = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    // console.log(item);
    myFiles = await fs.promises.readFile(`blogData/${item}`, "utf-8");
    // console.log(myFiles);
    allBlogs.push(JSON.parse(myFiles));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
export default Blog;
