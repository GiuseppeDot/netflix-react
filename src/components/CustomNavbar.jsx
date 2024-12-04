import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import netflixLogo from "../assets/netflix_logo.png";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <>
      <Navbar className=" mb-5 " expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img
              className="netflix-logo"
              src={netflixLogo}
              alt="logo-netflix"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Link to="/Creed" className="nav-link">
                Serie TV
              </Link>
              <Link to="/Marvel" className="nav-link">
                Film
              </Link>
              <Nav.Link href="#action4">Nuovi e Popolari</Nav.Link>
              <Nav.Link href="#action5">La mia lista</Nav.Link>
              <Nav.Link href="#action6">Sfogla per lingua</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
