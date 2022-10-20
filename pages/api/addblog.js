import Blog from "../../models/Blog";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = new Blog({
        title: req.body[i].title,
        content: req.body[i].content,
        author: req.body[i].author,
        metadesc: req.body[i].metadesc,
        slug: req.body[i].slug,
      });
      await b.save();
    }
    res.status(200).json({ message: "Blog added successfully" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
