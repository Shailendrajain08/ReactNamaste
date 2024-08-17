import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logoItem">
        <img className="logo" alt="logo" src={LOGO_URL}></img>
      </div>
      <div className="navItem">
        <ul>
          <li className="liItem"><Link className="link" to="/">Home</Link></li>
          <li className="liItem"><Link className="link" to="/about">About US</Link></li>
          <li className="liItem"><Link className="link" to="/contact">Contact US</Link></li>
          <li className="liItem">Cart</li>
          <button className="login" onClick={() => {
            btnName === "Login" ?
              setBtnName("Logout") : setBtnName("Login") 
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
