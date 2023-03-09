import React, { useEffect, useState } from "react";

interface Post {
    id: string,
    title: string
}

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data.slice(0, 5));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default PostList;
