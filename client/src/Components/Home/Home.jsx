import React from "react";
import { posts } from "../../Data.js";
import Cards from "../Cards.jsx";

const Home = () => {
  return (
    <div className="flex flex-row p-20 ">
      {posts.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
