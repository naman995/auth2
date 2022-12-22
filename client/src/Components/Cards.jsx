import React from "react";

import Button from "./Button";

const Cards = ({ post }) => {
  return (
    <div className=" bg-gray-200  ">
      <p className="font-bold text-center">{post.title}</p>
      <img className="aspect-square" src={post.img} alt="posts imaged" />
      <p>{post.desc}</p>
      <Button text={'Read_me'} />
    </div>
  );
};

export default Cards;
