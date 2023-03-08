import { React } from "react";

import "../styles/navbar.css";
import Description from "./Description";
import Navbar from "./Navbar";

const Home = (props) => {
  
  return (
    
    <div className="Home">
      <Navbar user={props.user} setUser={props.setUser} />
      <Description />
    </div>
  );
};

export default Home;
