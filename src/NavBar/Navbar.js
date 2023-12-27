import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logoNavbar from "../assets/img/logo.png";
import "../NavBar/Navbar.css";
export default function NavBar() {

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#">
          <img className="Logo" srcSet={logoNavbar} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle style={{ border: 'none', boxShadow: 'none' }} className="list-icon" aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-Link" href="#Home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-Link" href="#ABOUT">
              ABOUT
            </Nav.Link>


            <Nav.Link className="nav-Link" href="#PRICING">
              PRICING
            </Nav.Link>
            <Nav.Link className="nav-Link" href="#CONTACT">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

