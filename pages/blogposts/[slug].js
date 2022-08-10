import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blog from "../../styles/Blog.module.css";
import Head from "next/head";
// import Image from "next/image";

function slug() {
  const router = useRouter();
  const [Blog, setBlog] = useState([]);
  useEffect(() => {
    console.log("useEffect is running in slug");
    if (!router.isReady) return;
    const { slug } = router.query;
    console.log(slug);
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlog(parsed);
      });
  }, [router.isReady]);
  return (
    <div>
      <div className={blog.container}>
        <Head>
          <title>{slug}</title>
        </Head>

        <main className={blog.main}>
          <div>
            <h1 className={blog.title}>{Blog.title}</h1>
            <p className={blog.description}>{Blog.content}</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default slug;
