// React Dependencies
import React from 'react'
import Navigation from '../components/navigation'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap'

 // Import Images
import linearRegression from "../images/linear-regression.png"
import mountLaguna from "../images/mount-laguna.jpg"
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
              <Button variant="dark">Learn More</Button>
              <Card.Img src={linearRegression} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg>
          <Card className="text-center mt-5">
            <Card.Body>
              <Card.Title>Eclipsing Binary: KOI-3570</Card.Title>
              <Card.Text>Plot the primary and secondary eclispses of a star system using data from a FITS file.</Card.Text>
              <Button variant="dark">Learn More</Button>
              <Card.Img src={eclipsingBinary} />
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

    <Container fluid style={{margin: "80px 0 0 0", padding: "0"}}>
      <Row>
        <Col lg>
          <Card className="text-center" text="white" border="0">
            <Card.Img src={mountLaguna} />
            <Card.ImgOverlay style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
              <h1>Never Stop.</h1>
              <h4 className="text-muted">Keep moving forward.</h4>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>

    <Jumbotron fluid className=" text-center" style={{backgroundColor: "#f2f2f2", margin: "0", padding: "20px 0 0 0"}}>
      <Container>
        <p>Location: Mount Laguna, CA.</p>
        <hr/>
        <Row>
          <Col md>
            <p className="text-muted"><small><a href="https://github.com/">GitHub Pages</a> hosts and delivers entire site.</small></p>
          </Col>
          <Col md>
            <p className="text-muted"><small>Copyright &copy; 2020 David Jaimes. All Rights Resrved.</small></p>
          </Col>
          <Col md>
            <p className="text-muted"><small>Built, tested, and developed with <a href="https://www.gatsbyjs.org/">Gatsby JS</a>.</small></p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </div>
)
