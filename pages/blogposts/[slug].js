import React from "react";
import { useRouter } from "next/router";
import blog from "../../styles/Blog.module.css";
import Head from "next/head";
// import Image from "next/image";

function slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <div className={blog.container}>
        <Head>
          <title>{slug}</title>
        </Head>

        <main className={blog.main}>
          <div>
            <h1 className={blog.title}>{slug}</h1>
            <p className={blog.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              laboriosam sunt incidunt minus obcaecati nulla repudiandae
              perspiciatis voluptate dolor provident culpa vitae harum repellat
              corrupti fugit, magni iste. Mollitia, debitis.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default slug;
