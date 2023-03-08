import { React, useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Akatsukix from "../componentx/Akatsukix";
function Akatsuki(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar user={props} />
      <Akatsukix />
    </div>
  );
}

export default Akatsuki;
