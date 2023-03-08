import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import "../styles/navbar.css";
import Login from "./Login";
import Description from "./Description";

const Home = (props) => {
  
  return (
    
    <div className="Home">
      <Navbar user={props} />
      <Description />
    </div>
  );
};

export default Home;
