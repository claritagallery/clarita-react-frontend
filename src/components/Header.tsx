import React, { useState } from "react"

import logoAzul from "../assets/clogo.png"

//import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"

function Header() {
  return (
    <section className="top-nav">
      <Link to="/">
        {" "}
        <img className="logo" src={logoAzul} alt="gallery-logo" width={60} height={60} />
      </Link>
      <input className="search-box" type="text" placeholder="search coming soon" />
      <input id="menu-toggle" type="checkbox" />
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
  )
}

export default Header
