import React from "react";
import SignUpButton from "./SignUpButton";
import Button from "./Button";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full  gap-10  border-4 rounded-3xl border-black m-40 ">
      <div>
        <SignUpButton />
      </div>
      <div className="border-4 p-8 border-gray-700 text-3xl rounded-full border-t-8">
        OR
      </div>
      <div className="flex flex-col ">
        <input
          className="border-2 border-rounded-xl border-gray-600 my-2 p-2"
          type="text"
          placeholder="UserName"
        />
        <input
          className="border-2 border-rounded-xl border-gray-600  my-2 p-2"
          type="text"
          placeholder="Password"
        />
        <Button text={'Login'}/>
      </div>
    </div>
  );
};

export default Login;
