import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// TODO: Move database connection to separate file

const PORT = process.env.PORT || 3001;
const MONGO_URI =
  process.env.MONGO_URI ||
  `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017`;

const app = express();
mongoose.connect(MONGO_URI);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Post = mongoose.model("Post", postSchema);
// Delete all documents in the collection

app.use(cors());
app.use(express.json());

// TODO: Add routes as global constants
// TODO: Add routes in separate files
// TODO: Add Post model

app.get("/homeData", (_, res) => {
  res.json({
    message:
      "This is a simple blog application built with React, Express and MongoDB.",
  });
});

app.get("/post", async (_, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/post", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPostData = { title, content };
  try {
    const newPostDocument = await Post.create(newPostData);
    res.json(newPostDocument);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
