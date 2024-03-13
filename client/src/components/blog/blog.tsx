import React from "react";
import "./blog.scss";

function Blog() {
  const [posts, setPosts] = React.useState([] as any[]);

  // TODO: Replace with componentDidMount
  // TODO: Add Post model
  React.useEffect(() => {
    fetch("http://localhost:3002/post")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

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
