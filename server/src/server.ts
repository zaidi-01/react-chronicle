import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

let POST_ID = 1;

app.use(cors());
app.use(express.json());

// TODO: Replace with database connection
const posts = [
  {
    id: POST_ID++,
    title: "Post 1",
    content: "This is the first post",
  },
  {
    id: POST_ID++,
    title: "Post 2",
    content: "This is the second post",
  },
];

// TODO: Add routes as global constants
// TODO: Add routes in separate files
// TODO: Add Post model

app.get("/homeData", (_, res) => {
  res.json({
    message:
      "This is a simple blog application built with React and Express.",
  });
});

app.get("/post", (_, res) => {
  res.json(posts);
});

app.post("/post", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPost = {
    id: POST_ID++,
    title,
    content,
  };
  posts.push(newPost);

  res.json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
