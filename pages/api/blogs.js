// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
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
  res.status(200).json(allBlogs);
}
