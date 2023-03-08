import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Shops from "../componentx/Shops";
function Shop(props) {
  return (
    <div>
      <Navbar user={props} />
      {props.user.name === "User" ? (
        <div>Please Logged In</div>
      ) : (
        <Shops />
      )}
    </div>
  );
}

export default Shop;
