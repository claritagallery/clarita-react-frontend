import React, { useState } from "react";
import logo from "../assets/ccolor.png";
import logoAzul from "../assets/clogo.png";
import hamburguer from "../assets/hamburguer.svg";
import close from "../assets/x.svg";
//import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [closeButton, setCloseButton] = useState(false);

  return (
    <header className="primary-header">
      <div className="nav-container">
        <img src={logoAzul} alt="gallery-logo" width={80} height={80} />

        <button className="hamburguer-botton">
          <img
            onClick={() => setOpenMenu((prev) => !prev)}
            src={hamburguer}
            className={`icon-hamburguer ${openMenu ? "hide-hamburguer" : ""}`}
          />
          <img
            onClick={() => {
              setOpenMenu(false);
              setCloseButton((prev) => {
                console.log(prev);
                return !prev;
                //return false;
              });
            }}
            src={close}
            className={!openMenu ? "icon-close" : "show-close-button"}
          />
          <span className="visually-hidden">Menu</span>
        </button>
        <nav className={`primary-navigation ${openMenu ? "active" : "not-active"}`}>
          <ul className="nav-list">
            <li>Albums</li>
            <li>Photos</li>
          </ul>
        </nav>
      </div>
      <input type="text" placeholder="search coming soon" />
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
