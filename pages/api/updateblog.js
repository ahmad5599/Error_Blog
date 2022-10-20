import Blog from "../../models/Blog";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = await Blog.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.status(200).json({ message: "Blog updated successfully" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
