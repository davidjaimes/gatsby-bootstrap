// React Dependencies
import React from 'react'
import { Link } from "gatsby"
import Navigation from '../components/navigation'
import Footer from '../components/footer'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap'

 // Import Images
import linearRegression from "../images/linear-regression.png"
import eclipsingBinary from "../images/koi-3570-lc.png"


export default () => (
  <div>

    <Navigation/>

    <Jumbotron fluid className="text-center" style={{backgroundColor: "#24292e", paddingTop: "10%", paddingBottom: "10%"}}>
      <Container>
        <h1 className="text-light">Husband. Scientist. Trail Runner.</h1>
        <h4 className="text-muted">Creativity and imagination are great starting places, but hard-headed thinking and extreme attention to detail are essential to success.</h4>
        <p className="text-muted">Jet Propulsion Laboratory</p>
      </Container>
    </Jumbotron>

    <Container>
      <Row>
        <Col lg>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Linear Regression Plot</Card.Title>
              <Card.Text>Use the Python programming language--and a little linear algebra--to make a simple linear regression visialization.</Card.Text>
              <Link to="/linear-regression"><Button variant="dark">Learn More</Button></Link>
              <Link to="/linear-regression"><Card.Img src={linearRegression}/></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Eclipsing Binary: KOI-3570</Card.Title>
              <Card.Text>Plot the primary and secondary eclispses of a star system using data from a FITS file.</Card.Text>
              <Link to="/eclipsing-binaries"><Button variant="dark">Learn More</Button></Link>
              <Link to="/eclipsing-binaries"><Card.Img src={eclipsingBinary} /></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col md className="mt-5 mt-5">
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md className="mt-5 mt-5">
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Footer/>
  </div>
)
