import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';

const Header = () => (
  <Navbar bg="light" expand="md">
    <Container>
      <Navbar.Brand href="/">Clarita</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/">
            Home
          </Nav.Link>
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
        <Button disabled variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
);


export default Header;
