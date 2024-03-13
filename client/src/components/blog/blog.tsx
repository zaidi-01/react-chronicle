import React from "react";

function Blog() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "First Post", content: "This is my first post!" },
    { id: 2, title: "Second Post", content: "This is my second post!" },
  ]);

  return (
    <div className="blog">
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
