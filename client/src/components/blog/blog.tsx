import React from "react";
import "./blog.scss";

function Blog() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "First Post", content: "This is my first post!" },
    { id: 2, title: "Second Post", content: "This is my second post!" },
  ]);

  return (
    <div className="blog">
      <h2>Blog Posts</h2>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
