import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/CSLogo.png";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar className="bootstrapHeader" bg="light" expand="lg" sticky="top">
      <Container className="header">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="50" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbarHeader">
            <Link className="navlink" to="home">
              Home
            </Link>
            <Link className="navlink" to="learningapp">
              Learning App
            </Link>
            <Link className="navlink" to="products">
              Products
            </Link>
            <Link className="navlink" to="aboutus">
              About Us
            </Link>
            <Link className="navlink" to="contactus">
              Contact Us
            </Link>
            <Link className="navlink" to="onlinetrainings">
              Online Trainings
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
