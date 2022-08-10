// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//a valid slug: http://localhost:3000/api/getblogs?slug=Learn-Nextjs
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(404).json({
        error: "Post not found",
      });
    }
    res.status(200).json(JSON.parse(data));
  });
}
