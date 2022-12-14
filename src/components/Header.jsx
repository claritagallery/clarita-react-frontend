import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
const Header = () => (
  <Navbar bg="light" expand="md">
    <Container>
      <Link to="/">
        <Navbar.Brand href="/">Clarita</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/albums">
            <Nav.Link>Albums</Nav.Link>
          </Link>
          <Link to="/photos">
            <Nav.Link>Photos</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search (coming soon!)"
          className="me-2"
          aria-label="Search (coming soon!)"
          disabled
        />
        <Button disabled variant="outline-success">
          Search
        </Button>
      </Form>
    </Container>
  </Navbar>
);

export default Header;
