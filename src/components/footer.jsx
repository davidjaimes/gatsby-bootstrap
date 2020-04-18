// React Dependencies
import React from 'react'
import mountLaguna from "../images/mount-laguna.jpg"

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Container, Row, Col, Card} from 'react-bootstrap'


const FooterPage = () => {

  return (
    <div>
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
  )}

export default FooterPage
