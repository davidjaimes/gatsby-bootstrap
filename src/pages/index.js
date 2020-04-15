// React Dependencies
import React from 'react'
import Navigation from '../components/navigation'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap'

 // Import Images
import linearRegression from "../images/linear-regression.png"
import mountLaguna from "../images/mount-laguna.jpg"

export default () => (
  <div>

    <Navigation/>

    <Jumbotron fluid className="text-center" style={{backgroundColor: "#24292e"}}>
      <Container>
        <h1 className="text-light">Husband. Scientist. Trail Runner.</h1>
        <h4 className="text-muted">Creativity and imagination are great starting places, but hard-headed thinking and extreme attention to detail are essential to success.</h4>
        <p className="text-muted">Jet Propulsion Laboratory</p>
      </Container>
    </Jumbotron>

    <Container>
      <Row>
        <Col md className="mt-4">
          <Card className="text-center">
            <Card.Header>Linear Regression</Card.Header>
            <Card.Img src={linearRegression} />
            <Card.Body>
              <Card.Text>Use the Python programming language--and a little linear algebra--to make a simple linear regression visialization.</Card.Text>
              <Button variant="dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md className="mt-4">
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Img src={mountLaguna} />
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

      <Row>
        <Col md className="mt-5 mb-5">
          <Card className="text-center">
            <Card.Img src={mountLaguna} />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md className="mt-4">
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

        <Col md className="mt-4">
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

    <Jumbotron fluid className=" text-center mt-5 pt-4 pb-1" style={{backgroundColor: "#f2f2f2"}}>
      <Container>
        <p className="text-muted">My Footer is Under Development.</p>
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
