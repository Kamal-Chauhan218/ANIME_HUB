import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  let val = {};
  val = { name: "User" };
  const [user, setUser] = useState(val);

  const getUser = async () => {
    const res = await Axios.get("http://localhost:5000/auth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res.data != null) {
      navigate("/");
    }
    setUser(res.data);
  };
  useEffect(() => {
    getUser();
  });
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        "http://localhost:5000/auth/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar user={props} />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Welcome To My Auth
            </h1>
            <p class="leading-relaxed mt-4">
              The problem is not that testing is the bottleneck. The problem is
              that you don’t know what’s in the bottle. That’s a problem that
              testing addresses.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label htmlFor="name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label htmlFor="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label htmlFor="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleSubmit}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Already a user? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
