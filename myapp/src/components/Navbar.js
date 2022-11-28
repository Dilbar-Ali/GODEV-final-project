import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>M</span>ovies
          </h2>
          <h2>
            <span>F</span>lex
          </h2>
        </div>

        {/* ===== Second menue part start ===== */}

        <div className="menu-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="contect">Contect</a>
            </li>
          </ul>
          </div>
          <div className="Search">
           <div className="Search_input">
           <input placeholder="Search" />
 
           </div>
          </div>
        
      </nav>

      {/* ???????????????Hero Section?????????? */}

    </>
  );
};

export default Navbar;
