// React Dependencies
import React from 'react'
import Navigation from '../components/navigation'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap'


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
        <Col>
          <Card>
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

        <Col>
          <Card>
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
  </div>
)
