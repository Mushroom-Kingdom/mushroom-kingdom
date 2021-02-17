import React, { useContext } from "react";
import AuthenticationContext from "../../contexts/AuthenticationContext";
import { Navbar, Nav, Button, Form } from 'react-bootstrap';

function Navb() {
  const auth = useContext(AuthenticationContext);

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Mushroom-Kingdom</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {!auth.isAdmin && (<Nav.Link href="/">Home</Nav.Link>)} 
        {!auth.isAdmin && (<Nav.Link href="/about">About</Nav.Link>)}
        {!auth.isAdmin && (<Nav.Link href="/shop">Shop</Nav.Link>)}
        {!auth.isAdmin && auth.isAuthenticated && (<Nav.Link href="/members">User Dashboard</Nav.Link>)}
        {auth.isAdmin && auth.isAuthenticated && (<Nav.Link href="/admin">Admin Dashboard</Nav.Link>)}
        {auth.isAdmin && auth.isAuthenticated && (<Nav.Link href="/admin/products">Products</Nav.Link>)}   
       
      </Nav>
      <Form inline>
        {auth.isAuthenticated && (
          <Button variant="outline-success" onClick={auth.logout}>Logout</Button>
        )}
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navb;
