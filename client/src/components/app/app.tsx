import { AppBar, Box, Button } from "@mui/material";
import Blog from "components/blog/blog";
import Home from "components/home/home";
import NewPost from "components/new-post/new-post";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./app.scss";

// TODO: Add routes as shared constants
const routes: Map<string, string> = new Map([
  ["Home", "/"],
  ["Blog", "/blog"],
  ["New Post", "/new-post"],
]);

function App() {
  const onAddPost = (post: any) => {
    alert(`Added post: ${post.title}`);
  }

  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {Array.from(routes.keys()).map((page) => (
              <NavLink to={routes.get(page) as string} key={page}>
                <Button sx={{ color: "white", display: "block" }}>
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
        </AppBar>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/new-post"
              element={<NewPost onAddPost={onAddPost} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
