// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


const NavigationPage = () => {

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">David Jaimes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <NavDropdown title="Documentation" id="responsive-nav-dropdown">
            <NavDropdown.Item href="/astronomy">Astronomy</NavDropdown.Item>
            <NavDropdown.Item href="/analysis">Data Analysis</NavDropdown.Item>
            <NavDropdown.Item href="/macOS">macOS</NavDropdown.Item>
            <NavDropdown.Item href="/data">Data Files</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Disabled Text Area" className="mr-2" disabled="True" size="sm" style={{width: "250px"}}/>
          <Button variant="outline-light" size="sm">Disabled Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )}

export default NavigationPage
