import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import "./new-post.scss";

function NewPost({ onAddPost }: { onAddPost: (post: any) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content };
    onAddPost(newPost);

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <TextField
          required
          type="text"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          required
          type="text"
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained">
            Add Post
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
