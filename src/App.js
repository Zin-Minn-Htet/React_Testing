import React, { useEffect, useState } from "react";
import AddPost from "./components/AddPost";
import Post from "./components/Post";

function App() {
  const DB_NAME = "PostDB";

  let [posts, setPosts] = useState([]);

  const addPosts = (post) => {
    setPosts([post, ...posts])
  }

  useEffect(() => {
    let data = localStorage.getItem(DB_NAME);
    if (data) setPosts(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem(DB_NAME, JSON.stringify(posts))
  }, [posts]);

  return (
    <div>
      <h2 className="text-center text-info">Posts</h2>
      <Post posts={posts} />
      <AddPost addPost={addPosts} />
    </div>
  )
}

export default App;
