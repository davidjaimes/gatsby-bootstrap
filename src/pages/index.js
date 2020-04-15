// React Dependencies
import React from 'react'
import Navigation from '../components/navigation'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export default () => (
  <div>
    <Navigation/>

    <Jumbotron className="text-center">
      <h1>Husband. Scientist. Trail Runner.</h1>
      <h4 className="text-muted">Creativity and imagination are great starting places, but hard-headed thinking and extreme attention to detail are essential to success.</h4>
      <p className="text-muted">Jet Propulsion Laboratory</p>
      <Button variant="primary">Get Started</Button>
      <Button className="ml-2" variant="primary">@davidjaimes</Button>
    </Jumbotron>

    <Container className="h-25">
      <Image src="mount-laguna.jpg" fluid />
    </Container>
  </div>
)
