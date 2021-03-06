import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
    return (
        <Navbar sticky="top" className='py-2' bg="info" expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={logo}
          // width="130"
          height="30"
          className="d-inline-block align-top"
        /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-2"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link href="home#services">Services</Nav.Link>
        <Nav.Link href="home#experts">Experts</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        {!user ?
          <Nav.Link as={Link} to="/Login">Login</Nav.Link> :
          <Nav.Link onClick={handleLogout} as={Link} to="/">Logout</Nav.Link>
        
        }
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