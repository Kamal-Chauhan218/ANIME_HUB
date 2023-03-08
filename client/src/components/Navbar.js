import { React, useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {

  const navigate = useNavigate();
  console.log(props)
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            className="uzumaki_logo"
            src={
              "https://i.pinimg.com/236x/61/16/e5/6116e5ec78c3160fb754ad264e274e12--logo-google-understanding-anxiety.jpg"
            }
          />
          <span class="ml-3 text-xl">Uzumaki Clan</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">About Us</a>
          <a class="mr-5 hover:text-gray-900">Clans</a>
          <a class="mr-5 hover:text-gray-900">Hokage</a>
          <a class="mr-5 hover:text-gray-900" href="/akatsuki">
            Akatsuki
          </a>
        </nav>
        <p class="mr-5 text-red-500 hover:text-gray-900">
          Welcome, {props.user.user.name.split(" ")[0].toLocaleLowerCase()}
        </p>
        <button
          onClick={logout}
          class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
        >
          {props.user.user.name === "User" ? "Login" : "Logout"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
