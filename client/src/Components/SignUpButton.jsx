import React from "react";

const List = [
  {
    id: 1,
    name: "Google",
  },
  {
    id: 2,
    name: "Facebook",
  },
  {
    id: 3,
    name: "Twitter",
  },
  {
    id: 4,
    name: "Github",
  },
];

const SignUpButton = () => {
  return (
    <div className="flex flex-col ">
      {List.map((item) => (
        <button
          key={item.id}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default SignUpButton;
