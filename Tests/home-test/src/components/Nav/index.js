import React from "react";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
      {props.testlist.map(item => (
        <li className="brand">
          <a href="/">{item}</a>
        </li>
      )) /*|| `I am going to ${props.action} for ${props.testlist} `*/}
      </ul>
    </nav>
  );
}

export default Nav;