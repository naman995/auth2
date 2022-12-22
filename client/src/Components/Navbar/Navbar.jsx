import { Link } from "react-router-dom";
import user from "../../App";

 
const Navbar = () => {
  console.log(user);
  return (
    <div className="bg-indigo-300 p-4 flex flex-row ">
      <span className="text-xl flex-auto w-32 pl-10 font-bold" > <Link to ="/"> Authentication</Link> </span>
      {
        user ? (
           <div className="flex flex-row pr-40 ">
             <h1 className="text-xl  ">Naman Rajput</h1>
             <h1 className="text-xl pl-10 ">Logout</h1>
           </div>

        ):(<Link to="login">Login</Link>)
      }
    </div>
  );
};

export default Navbar;
