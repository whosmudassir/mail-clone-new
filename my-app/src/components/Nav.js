import React from "react";
import { Navbar, Container, NavDropdown, Col, Image } from "react-bootstrap";

const Nav = () => {
  const textStyle = {
    color: "white",
    fontFamily: "tech",
    fontSize: "22px",
    fontKerning: "50px",
    fontWeight: "bold",
    position: "relative",
    bottom: "-3px",
    left: "0px",
    margin: 0,
    padding: 0,
  };
  return (
    <div>
      <Navbar bg="black" variant="dark">
        <Container
          style={{ marginLeft: 30, height: 45 }}
          className="justify-content-start"
          padding="0"
        >
          <Navbar.Brand href="/">
            <img
              src="https://www.logolynx.com/images/logolynx/ef/ef01974593639287f6d22b6bc9d23ca8.png"
              width="40"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Text style={textStyle}>DED:MAIL</Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
