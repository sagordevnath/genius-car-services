import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo.png'

const Header = () => {
    return (
        <Navbar sticky="top" className='py-4' bg="info" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="130"
          height="50"
          className="d-inline-block align-top"
        /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-2"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action1">Service</Nav.Link>
        <Nav.Link href="#action1">Experts</Nav.Link>
        <Nav.Link href="#action1">About</Nav.Link>
        </Nav>
        
      <Form className="d-flex">
        <FormControl
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
    );
};

export default Header;