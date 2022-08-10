import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blog from "../../styles/Blog.module.css";
import Head from "next/head";
import * as fs from "fs";
// import Image from "next/image";

const Slug = (props) => {
  const [Blog, setBlog] = useState(props.myBlog);

  return (
    <div>
      <div className={blog.container}>
        <Head>
          <title>{Blog && Blog.title}</title>
        </Head>

        <main className={blog.main}>
          <div>
            <h1 className={blog.title}>{Blog && Blog.title}</h1>
            <p className={blog.description}>{Blog && Blog.content}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

//^^^^^^^^^^^^^^^^^for server side rendering^^^^^^^^^^^^^^^
// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   console.log(slug);
//   let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
//   let myBlog = await data.json();

//   return {
//     props: { myBlog }, // will be passed to the page component as props
//   };
// }
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//^^^^^^^^^^^^^^^^^^^^^^^^^for static side rendering^^^^^^^^^^^^^^^
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "Learn-Css" } },
      { params: { slug: "Learn-Reactjs" } },
      { params: { slug: "Learn-Nextjs" } },
      { params: { slug: "Learn-Html" } },
      { params: { slug: "Learn-Routing" } },
      { params: { slug: "How-to-use-google-analytics-with-nextjs" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
