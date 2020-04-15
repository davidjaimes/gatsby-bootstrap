// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const NavigationPage = () => {

  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Brand href="/">David Jaimes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <NavDropdown title="Documentation" id="responsive-nav-dropdown" className="text-primary">
            <NavDropdown.Item href="/astronomy">Astronomy</NavDropdown.Item>
            <NavDropdown.Item href="/analysis">Data Analysis</NavDropdown.Item>
            <NavDropdown.Item href="/macOS">macOS</NavDropdown.Item>
            <NavDropdown.Item href="/data">Data Files</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Disabled Search" className="mr-sm-2" disabled="True"/>
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )}

export default NavigationPage
