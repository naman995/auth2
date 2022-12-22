import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Link, Route, Navigate } from "react-router-dom";

function App() {

  const user = false;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
