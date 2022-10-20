// getting-started.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, default: "anonymous", required: true },
    phone: { type: String, required: true },
    comment: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Contact", ContactSchema);
