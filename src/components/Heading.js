import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "./Heading.css";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <>
      <Container>
        <div className="box px-3">
          <h1>API</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden
          </p>
         <Link to="/about">
          <Button variant="secondary" size="md">
            info
          </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Heading;
