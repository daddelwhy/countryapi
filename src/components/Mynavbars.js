import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Mynavbars.css";
import { Link } from "react-router-dom";

function Mynavbars() {
  return (
    <>
      <Navbar variant="light" className="navbar-transparent">
        <Container size="sm">
          <Navbar.Brand as={Link} to="/" style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>API</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'black', fontWeight: 'bold' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'black', fontWeight: 'bold' }}>info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Mynavbars;
