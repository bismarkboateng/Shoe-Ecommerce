import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Container>
    <Navbar bg="light" expand="lg" fixed="top">
    <Navbar.Brand className="px-5" href="#">Home</Navbar.Brand>
        <div className="mx-auto" style={{width: "200"}}>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Form className="d-flex">
                <Form.Control style={{ width: "60rem" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
                <NavDropdown title="Accounts" id="navbarScrollingDropdown" className="px-5">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                </NavDropdown>
                
            </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    </Container>
  );
}

export default NavScrollExample;