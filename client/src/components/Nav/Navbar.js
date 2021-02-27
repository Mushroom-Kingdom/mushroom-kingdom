import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthenticationContext from "../../contexts/AuthenticationContext";
import { Navbar, Nav, Button, Form } from "react-bootstrap";

function Navb() {
  const auth = useContext(AuthenticationContext);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">Mushroom-Kingdom</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!auth.isAdmin && (
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          )}
          {!auth.isAdmin && (
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          )}
          {!auth.isAdmin && (
            <Link to={"/shop"} className="nav-link">
              Shop
            </Link>
          )}
          {!auth.isAdmin && auth.isAuthenticated && (
            <Link to={"/order"} className="nav-link">
              Order
            </Link>
          )}
          {auth.isAdmin && auth.isAuthenticated && (
            <Link to={"/admin"} className="nav-link">
              Admin Dashboard
            </Link>
          )}
          {auth.isAdmin && auth.isAuthenticated && (
            <Link to={"/admin/products"} className="nav-link">
              Products
            </Link>
          )}
        </Nav>
        <Form inline>
          <Nav.Link href="/login">
            <i className="fas fa-user"></i>
          </Nav.Link>
          {auth.isAuthenticated && (
            <Button variant="outline-success" onClick={auth.logout}>
              Logout
            </Button>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navb;
