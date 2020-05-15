// React Dependencies
import React from 'react'
import {PrismCode} from "../../components/prism-component"
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Card} from 'react-bootstrap'

import Image from 'react-bootstrap/Image'
import koi3570 from "../../images/koi-3570-lc.png"
import {Code1, Code2, Code3} from "./code-text"


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
          <p>If you're familiar getting FITS files, then download the data from <a href="https://exoplanetarchive.ipac.caltech.edu/">Nasa Exoplanet Archive</a>. I downloaded the following batch file <code>download_exoarch_27821.bat</code> from the archive. If you don't have the <code>wget</code> command installed in your system, then I recommend installing <a href="https://brew.sh/">Homebrew</a> and <code>wget</code> by using the following commands:</p>

          <Card style={{background:"#f6f8fa"}}>
            <Card.Header>Command Prompt</Card.Header>
            <PrismCode code={Code2} language="bash"/>
          </Card>

          <p>Go visit the <a href="https://irsa.ipac.caltech.edu/cgi-bin/Gator/nph-dd?mode=html&catalog=allwise_p3as_psd">catalog website</a></p>
          <Card style={{background:"#f6f8fa"}}>
            <Card.Header>download_exoarch_27821.bat</Card.Header>
            <PrismCode code={Code1} language="bash"/>
          </Card>

          <h2 className="mt-5">Lightcurve</h2>
          <p>Use <a href="https://www.astropy.org/">AstroPy</a> to plot a lightcurve (flux vs time) for KOI-3570. I am using <code>kplr005023948-2012060035710_slc.fits</code> because it has the greatest amount of data points in any file on the batch list--over 40,000 points.</p>

          <Card style={{background:"#f6f8fa"}}>
            <Card.Header>Python</Card.Header>
            <PrismCode code={Code3} language="python"/>
          </Card>

          <Image src={koi3570} fluid/>
        </Col>
      </Row>
    </Container>
    <Footer/>
  </div>
)
