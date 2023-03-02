import React, { useState } from "react";
import logo from "../assets/ccolor.png";
import logoAzul from "../assets/clogo.png";
import hamburguer from "../assets/hamburguer.svg";
import close from "../assets/x.svg";
//import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="top-nav">
      <img className="logo" src={logoAzul} alt="gallery-logo" width={60} height={60} />
      <input className="search-box" type="text" placeholder="search coming soon" />
      <input id="menu-toggle" type="checkbox"></input>
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <Link className="links" to="/albums">
          <li>Albums</li>
        </Link>
        <Link className="links" to="/photos">
          <li>Photos</li>
        </Link>
      </ul>
    </section>
  );
  // const [openMenu, setOpenMenu] = useState(false);
  // return (
  //   <header
  //     className={`primary-header ${openMenu ? "active-header" : "not-active-header"}`}
  //   >
  //     <div className="logo-background">
  //       <img className="logo" src={logoAzul} alt="gallery-logo" width={60} height={60} />
  //       {/* <p className="greeting">Hello gorgeous!</p> */}
  //     </div>
  //     <input className="search-box" type="text" placeholder="search coming soon" />
  //     <div className="nav-container">
  //       <button className="hamburguer-botton">
  //         <img
  //           onClick={() => setOpenMenu((prev) => !prev)}
  //           src={hamburguer}
  //           className={`icon-hamburguer ${openMenu ? "hide-hamburguer" : ""}`}
  //         />
  //         <img
  //           onClick={() => {
  //             return setOpenMenu(false);
  //           }}
  //           src={close}
  //           // className={!openMenu ? "icon-close" : "show-close-button"}
  //           className={openMenu ? "show-close-button" : "hide-close-button"}
  //         />
  //       </button>
  //       <nav className={`primary-navigation ${openMenu ? "active" : "not-active"}`}>
  //         <ul className="nav-list">
  //           <Link className="links" to="/albums">
  //             {" "}
  //             <li>Albums</li>
  //           </Link>
  //           <Link className="links" to="/photos">
  //             {" "}
  //             <li>Photos</li>
  //           </Link>
  //         </ul>
  //       </nav>
  //     </div>
  //   </header>
  // );
}

export default Header;
