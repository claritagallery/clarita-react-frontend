import React, { useState } from "react";
import logo from "../assets/ccolor.png";
import logoAzul from "../assets/clogo.png";
import hamburguer from "../assets/hamburguer.svg";
import close from "../assets/x.svg";
//import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={`primary-header ${openMenu ? "active-header" : "not-active-header"}`}
    >
      <img className="logo" src={logoAzul} alt="gallery-logo" width={60} height={60} />
      <p className="greeting">Hello gorgeous!</p>
      <input className="search-box" type="text" placeholder="search coming soon" />
      <div className="nav-container">
        <button className="hamburguer-botton">
          <img
            onClick={() => setOpenMenu((prev) => !prev)}
            src={hamburguer}
            className={`icon-hamburguer ${openMenu ? "hide-hamburguer" : ""}`}
          />
          <img
            onClick={() => {
              return setOpenMenu(false);
            }}
            src={close}
            className={!openMenu ? "icon-close" : "show-close-button"}
          />
        </button>
        <nav className={`primary-navigation ${openMenu ? "active" : "not-active"}`}>
          <ul className="nav-list">
            <Link className="links" to="/albums">
              {" "}
              <li>Albums</li>
            </Link>
            <Link className="links" to="/photos">
              {" "}
              <li>Photos</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
// const Header = () => (
//   <Navbar bg="light" expand="md">
//     <Container>
//       <Link to="/">
//         <Navbar.Brand href="/">Clarita</Navbar.Brand>
//       </Link>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="me-auto">
//           <Link to="/albums">
//             <Nav.Link>Albums</Nav.Link>
//           </Link>
//           <Link to="/photos">
//             <Nav.Link>Photos</Nav.Link>
//           </Link>
//         </Nav>
//       </Navbar.Collapse>
//       <Form className="d-flex">
//         <FormControl
//           type="search"
//           placeholder="Search (coming soon!)"
//           className="me-2"
//           aria-label="Search (coming soon!)"
//           disabled
//         />
//         <Button disabled variant="outline-success">
//           Search
//         </Button>
//       </Form>
//     </Container>
//   </Navbar>
// );

export default Header;
