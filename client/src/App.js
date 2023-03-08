import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import Akatsuki from "./components/Akatsuki";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";

function App() {
  const initialRef = useRef(true);
  const [user, setUser] = useState({ name: "User", email: "dummy.gmail.com" });
  const getUser = async () => {
    const res = await axios.get("http://localhost:5000/auth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUser(res.data);
  };
  useEffect(() => {
    if (!initialRef.current) {
      return;
    }
    initialRef.current = false;
    getUser();
    
  }, [user]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register user={user} />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/" element={<Home user={user} />} />
        <Route path="/akatsuki" element={<Akatsuki user={user} />} />
        <Route path="/Shop" element={<Shop user={user} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
