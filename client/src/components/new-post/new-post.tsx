import { FormEvent, useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default NewPost;
