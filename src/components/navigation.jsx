// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'

import Logo from "../images/favicon.png"

const NavigationPage = () => {

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} style={{height: "30px", marginRight: "20px"}}/>David Jaimes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" bg="dark" className="justify-content-end">
          <Nav>
            <Nav.Link href="/data">Data Analysis</Nav.Link>
            <Nav.Link href="/macOS">macOS Configuration</Nav.Link>
            <Nav.Link href="/github"><FaGithub /> GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}

export default NavigationPage
