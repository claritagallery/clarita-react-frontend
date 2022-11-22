import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="md">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand href="/">Clarita</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/albums">
            <Nav.Link>Albums</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/photos">
            <Nav.Link>Photos</Nav.Link>
          </LinkContainer>
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
