// getting-started.js
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: "anonymous", required: true },
    metadesc: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Blog", BlogSchema);
