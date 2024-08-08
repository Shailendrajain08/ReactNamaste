import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logoItem">
        <img className="logo" alt="logo" src={LOGO_URL}></img>
      </div>
      <div className="navItem">
        <ul>
          <li className="liItem">Home</li>
          <li className="liItem">About US</li>
          <li className="liItem">Contact US</li>
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
