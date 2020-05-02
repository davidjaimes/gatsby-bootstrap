// React Dependencies
import React from 'react'
import {PrismCode} from "../../components/prism-component"
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

import Image from 'react-bootstrap/Image'
import koi3570 from "../../images/koi-3570-lc.png"

const code1 = `
#!/bin/sh

# If wget is not installed on your system,
# please refer to http://irsa.ipac.caltech.edu/docs/batch_download_help.html.
#
# Windows users: the name of wget may have version number (ie: wget-1.10.2.exe)
# Please rename it to wget in order to successfully run this script
# Also the location of wget executable may need to be added to the PATH environment.
#
wget -O 'kplr005023948-2010355172524_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/281/81/kplr005023948-2010355172524_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2010355172524_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/298/15/kplr005023948-2010355172524_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2011073133259_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/415/00/kplr005023948-2011073133259_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2011073133259_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/431/79/kplr005023948-2011073133259_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2011177032512_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/314/41/kplr005023948-2011177032512_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2011177032512_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/331/15/kplr005023948-2011177032512_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2012004120508_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/482/00/kplr005023948-2012004120508_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2012004120508_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/498/41/kplr005023948-2012004120508_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2012088054726_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/514/78/kplr005023948-2012088054726_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2012088054726_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/531/47/kplr005023948-2012088054726_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2012179063303_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/548/10/kplr005023948-2012179063303_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2012179063303_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/564/78/kplr005023948-2012179063303_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2013011073258_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/614/95/kplr005023948-2013011073258_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2013011073258_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/631/43/kplr005023948-2013011073258_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2013098041711_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/647/84/kplr005023948-2013098041711_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2013098041711_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/664/60/kplr005023948-2013098041711_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2013131215648_llc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/681/29/kplr005023948-2013131215648_llc.fits' -a search_345998328.log
wget -O 'kplr005023948-2013131215648_llc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/698/04/kplr005023948-2013131215648_llc_lc.tbl' -a search_345998328.log
wget -O 'kplr005023948-2012060035710_slc.fits' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/753/70/kplr005023948-2012060035710_slc.fits' -a search_345998328.log
wget -O 'kplr005023948-2012060035710_slc_lc.tbl' 'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/756/03/kplr005023948-2012060035710_slc_lc.tbl' -a search_345998328.log
`

const code2 = `
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install wget
`

const code3 = `
from astropy.io import fits
import matplotlib.pyplot as plt

hdu = fits.open('kplr005023948-2012060035710_slc.fits')
time = hdu[1].data['TIME']
flux = hdu[1].data['SAP_FLUX']
plt.plot(time, flux, '.', markersize=1)
`

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
          <PrismCode code={code2} language="bash"/>

          <p>Go visit the <a href="https://irsa.ipac.caltech.edu/cgi-bin/Gator/nph-dd?mode=html&catalog=allwise_p3as_psd">catalog website</a></p>
          <PrismCode code={code1} language="bash"/>

          <h2 className="mt-5">Lightcurve</h2>
          <p>Use <a href="https://www.astropy.org/">AstroPy</a> to plot a lightcurve (flux vs time) for KOI-3570. I am using <code>kplr005023948-2012060035710_slc.fits</code> because it has the greatest amount of data points in any file on the batch list--over 40,000 points.</p>
          <PrismCode code={code3} language="python"/>
          <Image src={koi3570} fluid/>
        </Col>
      </Row>

    </Container>

    <Footer/>
  </div>
)
