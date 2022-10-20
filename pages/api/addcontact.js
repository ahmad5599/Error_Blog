import Contact from "../../models/Contact";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = new Contact({
        name: req.body[i].name,
        phone: req.body[i].phone,
        comment: req.body[i].comment,
        email: req.body[i].email,
      });
      await b.save();
    }
    res.status(200).json({ message: "Contact added successfully" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
