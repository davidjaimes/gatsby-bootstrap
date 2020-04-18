// React Dependencies
import React from 'react'
import {PrismCode} from "../../components/prism-component"
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

// import linearRegression from "../../images/linear-regression.png"
import nasaBatch from "nasa-batch"

export default () => (
  <div>
    <Navigation/>

    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg="8">
          <h1 className="text-center mb-5">Eclisping Binaries</h1>
          <p>Time series analysis in search for eclipsing binary stars can be daunting. Sometimes, it takes hours--even days or months--to find a single eclipsing binary in a dataset. However, when you find one, it is exciting. The following is an example light curve for target Kepler Object of Interest (KOI) 3570.</p>

          <h2 className="mt-5">KOI-3570</h2>
          <p>KOI-3570 (aliases: 2MASS J19405783+4009273, KIC 5023948, and WISE J194057.82+400927.3) is an eclipsing binary star system. It is a member of the old open cluster NGC 6819. By analyzing the eclipse properties of this system, we can measure the mass and radius of each star. These measurements can be used to precisely determine the age of the stars.</p>

          <h2 className="mt-5">Getting the data: FITS file</h2>
          <p>If you're familiar getting FITS files, then download the data from Nasa Exoplanet Archive. I downloaded the following batch file <code>download_exoarch_27821.bat</code> from the archive.</p>
          <PrismCode code={nasaBatch} language="bash"/>
        </Col>
      </Row>

    </Container>

    <Footer/>
  </div>
)
